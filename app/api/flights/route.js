import connectMongoDB from "@/libs/mongodb";
import flights from "@/models/flights";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    duration,
    times,
    stops,
    price,
    airline,
    icon,
    layover,
    type,
    from,
    to,
  } = await req.json();
  await connectMongoDB();
  await flights.create({
    duration,
    times,
    stops,
    price,
    airline,
    icon,
    layover,
    type,
    from,
    to,
  });

  return NextResponse.json(
    { message: "FLight added succesfully" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const flightDeels = await flights.find();
  return NextResponse.json(flightDeels);
}
