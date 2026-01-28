"use server";
import postgres from "postgres";
import { College } from "../definitions/definition";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function GET() {
  const colleges = await sql<College[]>`SELECT id, name FROM users;`;
  return colleges;
}