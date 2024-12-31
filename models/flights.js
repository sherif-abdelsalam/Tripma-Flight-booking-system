import mongoose, { Schema } from "mongoose";

const flightsSchema = new Schema({
  duration: { type: String, required: true },
  times: { type: String, required: true },
  stops: { type: Number },
  price: { type: String, required: true },
  airline: { type: String, required: true },
  icon: { type: String, required: true },
  layover: { type: String },
  type: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
});

const flights =
  mongoose.models.flights || mongoose.model("flights", flightsSchema);
export default flights;
