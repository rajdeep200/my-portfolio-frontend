import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export const config = {
  runtime: "edge",
};

const sql = neon(process.env.DATABASE_URL || '')

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const result =
      await sql`INSERT INTO queries (name, email, message) VALUES(${name}, ${email}, ${message}) RETURNING id;`;
    return NextResponse.json({ ack: 1, id:result[0].id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ ack: 0, error }, { status: 500 });
  }
}

export async function GET() {
  try {
    // await connectDB();
    // const users = await User.find();
    return NextResponse.json({ message: "User fetched" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ack: 0, error },
      { status: 500 }
    );
  }
}
