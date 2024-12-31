import Image from "next/image";
import "./flight-sum.css";
export default function FlightSummary({ flight }) {
  console.log(flight);
  return (
    <div className="flight-summary-container">
      <div className="flight-logo">
        <div className="flight-icon">
          <Image
            src={`/images/airlines/svg/${flight.icon}.svg`}
            alt={flight.airline}
            width={40}
            height={40}
          />
        </div>

        <div className="flight-duration">
          {flight.duration}
          <br />
          <span>{flight.airline}</span>
        </div>
      </div>

      <div>{flight.times}</div>

      <div>
        {flight.stops ? `${flight.stops} stop` : "NonStop"}
        <br />
        {flight.layover && <span>{flight.layover}</span>}
      </div>
      <div>
        {flight.price}
        <br />
        <span>{flight.type}</span>
      </div>
    </div>
  );
}
