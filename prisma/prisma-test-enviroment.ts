import util from 'node:util';
import crypto from 'node:crypto';
import { exec } from 'node:child_process';

import NodeEnviroment from 'jest-environment-node';
import dotenv from 'dotenv';
import type { Config } from "@jest/types";
import { Client } from 'pg';

dotenv.config({ path: '.env.testing' });

const execSync = util.promisify(exec);

const prismaBinary = './node_modules/.bin/prisma';

export default class PrismaTestEnviroment extends NodeEnviroment {
  private schema: string;
  private connectionString: string;


  constructor(config: Config.ProjectConfig) {
    super(config);

    const dbUser = process.env.DATABASE_USER;
    const dbPass = process.env.DATABASE_PASS;
    const dbHost = process.env.DATABASE_HOST;
    const dbPort = process.env.DATABASE_PORT;
    const dbName = process.env.DATABASE_NAME;

    this.schema = `test_${crypto.randomUUID()}`;
    this.connectionString = `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?schema=${this.schema}`;
  }

  async setup() {
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;

    await execSync(`${prismaBinary} migrate deploy`);

    return super.setup();
  }

  async teardown() {
    const client = new Client({ connectionString: this.connectionString });

    await client.connect();
    await client.query(`DROP SCHEMA IF EXISTS ${this.schema} CASCADE`);
    await client.end();
  }
}