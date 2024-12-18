import path from "path";
import fs from "fs";

export async function getHotelsInfo() {
  const filePath = path.join(process.cwd(), "public", "data", "hotels.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const hotels = JSON.parse(fileContent);
  return hotels;
}
