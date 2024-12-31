import mongoose, { Schema } from "mongoose";

const flightDeelsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const FlightDeels =
  mongoose.models.FlightDeels ||
  mongoose.model("FlightDeels", flightDeelsSchema);

export default FlightDeels;
