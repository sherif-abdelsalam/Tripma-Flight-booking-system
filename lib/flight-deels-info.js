import path from "path";
import fs from "fs";

export function getFlightDeelsInfo() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "flight-deels.json"
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const hotels = JSON.parse(fileContent);
  return hotels;
}

export function getPlacesToStayInfo() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "places-to-stay.json"
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const places = JSON.parse(fileContent);
  return places;
}
