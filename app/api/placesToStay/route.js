import connectMongoDB from "@/libs/mongodb";
import placesToStay from "@/models/places_to_stay";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, description, imageUrl } = await req.json();
  await connectMongoDB();
  await placesToStay.create({ title, description, imageUrl });

  return NextResponse.json(
    { message: "Place has beeb added succesfully" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const places = await placesToStay.find();
  return NextResponse.json(places, {
    message: "Places to stay retrieved succesfully",
    status: 200,
  });
}
