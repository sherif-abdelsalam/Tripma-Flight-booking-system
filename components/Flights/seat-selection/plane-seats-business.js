"use client";
import { useState } from "react";
import "./plane-seats-business.css";
import { toast } from "react-toastify";

const FlightSeatsBusiness = ({
  seats,
  seatsSelected,
  setSeatsSelected,
  travellersCount,
}) => {
  const rows = 5;
  const [businessSeats, setBusinessSeats] = useState(seats);

  const handleSeatClick = (seatNumber) => {
    const isSeatAlreadySelected =
      seatsSelected && seatsSelected.includes(seatNumber);
    const seat = businessSeats.find((seat) => seat.seatNumber === seatNumber);

    if (seat.status === "taken") {
      return;
    } else if (isSeatAlreadySelected) {
      setSeatsSelected((prevSelected) =>
        prevSelected.filter((id) => id !== seatNumber)
      );
      setBusinessSeats((prevSeats) =>
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

      setBusinessSeats((prevSeats) =>
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
      <div className="seats-container-business">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="row-business">
            {businessSeats
              .filter((seat) => parseInt(seat.seatNumber[0]) === rowIndex + 1)
              .map((seat, seatIndex) => (
                <div
                  key={`${rowIndex}-${seatIndex}`}
                  className="seats-business"
                >
                  {(seatIndex === 0 || seatIndex === 1) && (
                    <div>
                      <button
                        key={seat.seatNumber}
                        className={`seat-business ${seat.status}`}
                        onClick={() => handleSeatClick(seat.seatNumber)}
                      ></button>
                    </div>
                  )}
                  {seatIndex === 2 && (
                    <div className="row-number">{rowIndex + 1}</div>
                  )}

                  {(seatIndex === 2 || seatIndex === 3) && (
                    <div>
                      <button
                        key={seat.seatNumber}
                        className={`seat-business ${seat.status}`}
                        onClick={() => handleSeatClick(seat.seatNumber)}
                      ></button>
                    </div>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightSeatsBusiness;
