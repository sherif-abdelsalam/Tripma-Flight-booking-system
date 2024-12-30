import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

import FlightDeels from "@/models/flight_deels";

export async function POST(req) {
  const { title, description, price, imageUrl } = await req.json();
  await connectMongoDB();
  await FlightDeels.create({ title, description, price, imageUrl });

  return NextResponse.json(
    { message: "Flight_Deel has beeb added succesfully" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const flightDeels = await FlightDeels.find();
  return NextResponse.json(flightDeels);
}
