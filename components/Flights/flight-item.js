import Image from "next/image";

export default function FlightItem({ flight }) {
  return (
    <tr className="flight-row">
      <td className="flight-logo">
        <div className="flight-icon">
          <Image
            src={`/images/airlines/svg/${flight.icon}.svg`}
            alt={flight.airline}
            width={40}
            height={40}
          />
        </div>
        <div>
          {flight.duration}
          <br />
          <span>{flight.airline}</span>
        </div>
      </td>

      <td>{flight.times}</td>

      <td>
        {flight.stops ? `${flight.stops} stop` : "NonStop"}
        <br />
        {flight.layover && <span>{flight.layover}</span>}
      </td>
      <td>
        {flight.price}
        <br />
        <span>{flight.type}</span>
      </td>
    </tr>
  );
}
