import { NextResponse } from "next/server";
import Query from "@/models/Queries";
import { connectDB } from "@/lib/mongodb";

export const config = {
  runtime: "edge",
};

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, email, message } = await req.json();
    const newQuery = new Query({ name, email, message });
    await newQuery.save();
    return NextResponse.json({ ack: 1 }, { status: 201 });
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
