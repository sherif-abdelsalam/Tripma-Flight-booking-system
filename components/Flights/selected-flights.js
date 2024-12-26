import Image from "next/image";
import "./selected-flight.css";
import Link from "next/link";
export default function SelectedFlights({ flights, flightId, children }) {
  const flight = flights.find((flight) => flight.id === flightId);
  return (
    <div className="selected-flight-container">
      <div className="selected-flight">
        <div className="flight-icon-ailine">
          <Image
            src={`/images/airlines/svg/${flight.icon}.svg`}
            alt={flight.airline}
            width={50}
            height={50}
          />
          <div className="flight-airline-id">
            <p>{flight.airline}</p>
            <p className="grey-text">{flight.id}</p>
          </div>
        </div>

        <div className="flight-details">
          <p>{flight.duration}</p>
          <p>{flight.times}</p>
          <p className="grey-text">{flight.stops && flight.layover}</p>
        </div>
      </div>
      <div className="flight-price">
        <p>Total</p>
        <p className="price">{flight.price}</p>
      </div>

      {children}
    </div>
  );
}
