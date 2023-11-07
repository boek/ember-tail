import type { Config } from "drizzle-kit";
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

export default {
	schema: "./db/schema.ts",
	out: "./db",
	driver: 'turso',
	dbCredentials: {
		url: process.env.DATABASE_URL as string,
		authToken: process.env.DATABASE_AUTH_TOKEN as string,
	}
} satisfies Config;
