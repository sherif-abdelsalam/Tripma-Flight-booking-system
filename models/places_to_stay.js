import mongoose, { Schema } from "mongoose";

const placesToStaySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const placesToStay =
  mongoose.models.placesToStay ||
  mongoose.model("placesToStay", placesToStaySchema);
export default placesToStay;
