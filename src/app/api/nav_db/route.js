import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mogoose";
import Nav_db from "@/models/Nav_db";

export async function GET() {
  connectDB();
  const navs = await Nav_db.find();
  return NextResponse.json(navs);
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newLink = new Nav_db(data);
    const savedNav = await newLink.save();
    return NextResponse.json(savedNav);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
