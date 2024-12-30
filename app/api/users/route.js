import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Users from "@/models/users";

export async function POST(req) {
  const { name, email, phone } = await req.json();
  await connectMongoDB();
  await Users.create({ name, email, phone });
  return NextResponse.json({ message: "User created" }, { status: 201 });
}
export async function GET() {
  await connectMongoDB();
  const users = await Users.find();
  return NextResponse.json(users);
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Users.findByIdAndDelete(id);
  return NextResponse.json({ message: "User deleted" });
}
