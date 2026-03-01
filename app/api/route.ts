"use server";
import postgres from "postgres";
import { College } from "../definitions/definition";
import { NextResponse } from "next/server";
import { ALL_STUDENTS_COUNCIL_ID } from "../constants/data";

const sql = postgres(process.env.POSTGRES_URL!);

export async function GET() {
  const colleges = await sql<College[]>`
    SELECT id, name 
    FROM users 
    WHERE id != ${ALL_STUDENTS_COUNCIL_ID};`;
  return NextResponse.json(colleges, { headers: { 'Content-Type': 'application/json; charset=utf-8' }});
}