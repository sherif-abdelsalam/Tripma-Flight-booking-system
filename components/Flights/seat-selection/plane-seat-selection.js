"use client";
import Image from "next/image";
import "./plane-seat-selection.css";
import plane_seat_selection from "@/public/images/plane/plane_seat_selection.svg";
import FlightSeatsBusiness from "./plane-seats-business";
import FlightSeatsEconomy from "./plane-seats-economy";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
export default function PlaneSeatSelection({
  seatsInfo,
  travellersCount,
  tripType,
  children,
}) {
  const [seatsSelected, setSeatsSelected] = useState();
  console.log("SeatsSelected", seatsSelected);

  return (
    <div className="seats-selection">
      <Image
        src={plane_seat_selection}
        alt="plane_seat_selection"
        className="plane_seat_selection"
      />
      <FlightSeatsBusiness
        seats={seatsInfo.business}
        seatsSelected={seatsSelected}
        setSeatsSelected={setSeatsSelected}
        travellersCount={travellersCount}
      />
      <FlightSeatsEconomy
        seats={seatsInfo.economy}
        seatsSelected={seatsSelected}
        setSeatsSelected={setSeatsSelected}
        travellersCount={travellersCount}
      />

      <div className="seats-details">{children}</div>
      <ToastContainer />
    </div>
  );
}
