import { getHotelsInfo } from "@/lib/hotles-info";
import HotelCard from "./item";

export default async function Hotels() {
  const hotels = await getHotelsInfo();
  return (
    <div className="hotels-container">
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <HotelCard card={hotel} />
          </li>
        ))}
      </ul>
    </div>
  );
}
