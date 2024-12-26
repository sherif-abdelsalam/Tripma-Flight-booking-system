"use client";
import { useState } from "react";
import "./plane-seats-economy.css";
import { toast } from "react-toastify";

import ExitMark from "@/components/Icons/exit-mark";

export default function FlightSeatsEconomy({
  seats,
  seatsSelected,
  setSeatsSelected,
  travellersCount,
}) {
  const exitRows = [6, 14, 19, 29];
  const [economySeats, setEconomySeats] = useState(seats);

  const handleSeatClick = (seatNumber) => {
    const isSeatAlreadySelected =
      seatsSelected && seatsSelected.includes(seatNumber);
    const seat = economySeats.find((seat) => seat.seatNumber === seatNumber);

    if (seat.status === "taken") {
      return;
    } else if (isSeatAlreadySelected) {
      setSeatsSelected((prevSelected) =>
        prevSelected.filter((id) => id !== seatNumber)
      );
      setEconomySeats((prevSeats) =>
        prevSeats.map((seat) =>
          seat.seatNumber === seatNumber
            ? { ...seat, status: "available" }
            : seat
        )
      );
    } else {
      if (seatsSelected && seatsSelected.length >= travellersCount) {
        toast.warn("Maximum number of passengers reached.");
        return;
      }
      if (!seatsSelected) setSeatsSelected([seatNumber]);
      else setSeatsSelected((prev) => [...prev, seatNumber]);

      setEconomySeats((prevSeats) =>
        prevSeats.map((seat) =>
          seat.seatNumber === seatNumber
            ? { ...seat, status: "reserved" }
            : seat
        )
      );
    }
  };

  return (
    <div>
      <div className="seats-container">
        {Array.from({ length: 28 }).map((_, rowIndex) => {
          const rowNumber = rowIndex + 6;
          return (
            <div key={rowIndex}>
              {exitRows.includes(rowNumber) && (
                <div className="exit-row">
                  <ExitMark />
                  <p>Exit Row</p>
                </div>
              )}
              <div className="row" key={rowIndex}>
                {economySeats
                  .filter((seat) => {
                    const seatRow = parseInt(seat.seatNumber.match(/^\d+/)[0]);
                    return seatRow === rowNumber;
                  })
                  .map((seat, seatIndex) => (
                    <div key={seat.seatNumber} className="seats">
                      {seatIndex === 3 && (
                        <div className="row-number">{rowNumber}</div>
                      )}

                      <button
                        className={`seat ${seat.status}`}
                        onClick={() => handleSeatClick(seat.seatNumber)}
                      ></button>
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
