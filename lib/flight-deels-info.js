import path from "path";
import fs from "fs";

const filePath = (file_path) => {
  return path.join(process.cwd(), "public", "data", file_path);
};
export function getFlightDeelsInfo() {
  const file = filePath("flight-deels.json");

  const fileContent = fs.readFileSync(file, "utf-8");
  const hotels = JSON.parse(fileContent);
  return hotels;
}

export function getPlacesToStayInfo() {
  const file = filePath("places-to-stay.json");
  const fileContent = fs.readFileSync(file, "utf-8");
  const places = JSON.parse(fileContent);
  return places;
}

export function getReviews() {
  const file = filePath("reviews.json");
  const fileContent = fs.readFileSync(file, "utf-8");
  const reviews = JSON.parse(fileContent);
  return reviews;
}
