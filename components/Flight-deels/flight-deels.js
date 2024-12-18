import { getFlightDeelsInfo } from "@/lib/flight-deels-info";
import "./hotels.css";
import FlightDeelsCard from "../reuse/item";
import { Title } from "../reuse/title";

export default async function FlightDeels() {
  const hotels = await getFlightDeelsInfo();
  return (
    <div className="hotels-container">
      <div>
        <Title>
          Find your next adventure with these <span>flight deals </span>
        </Title>
      </div>

      <div className="flight-cards">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <FlightDeelsCard color="#605dec" card={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
}
