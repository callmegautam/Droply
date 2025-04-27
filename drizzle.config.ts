import * as dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';
import env from './lib/config/env';
dotenv.config({
    path: './.env',
});

export default defineConfig({
    schema: './lib/db/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: env.DATABASE_URL,
    },
});
