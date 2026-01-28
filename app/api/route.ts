"use server";
import postgres from "postgres";
import { College } from "../definitions/definition";
import { NextResponse } from "next/server";

const sql = postgres(process.env.POSTGRES_URL!);

export async function GET() {
  const colleges = await sql<College[]>`SELECT id, name FROM users;`;
  return NextResponse.json(colleges, { headers: { 'Content-Type': 'application/json; charset=utf-8' }});
}