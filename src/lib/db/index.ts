import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const sql = postgres(DATABASE_URL);
export const db = drizzle(sql, { logger: true });
