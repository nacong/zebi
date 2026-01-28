"use server";
import postgres from "postgres";
import { College } from "../definitions/definition";
import { NextResponse } from "next/server";

const sql = postgres(process.env.POSTGRES_URL!, { 
  ssl: 'require',
  connection: {
    application_name: 'zebi-app',
    client_encoding: 'UTF8'
  }
});

export async function GET() {
  const colleges = await sql<College[]>`SELECT id, name FROM users;`;
  return NextResponse.json(colleges);
}