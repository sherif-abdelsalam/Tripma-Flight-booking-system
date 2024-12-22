import Image from "next/image";
import FlightItem from "./flight-item";
import "./flight.css";
import map from "@/public/images/map.png";

export default function FlightsList({ flights }) {
  return (
    <div className="fligts-container">
      <p className="title">
        Choose a <span>departing</span> flight
      </p>
      <div className="flights-table-container">
        <table className="flights-table">
          <tbody>
            {flights.map((flight) => (
              <FlightItem key={flight.id} flight={flight} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="map-iamge">
        <Image src={map} alt="Map" width={1210} />
      </div>
    </div>
  );
}
