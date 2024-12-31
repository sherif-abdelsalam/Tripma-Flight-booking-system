"use client";

import { useEffect, useState } from "react";
import { Close } from "../Icons/close";
import "./booking.css";
import FlightSummary from "./flight-sum";
import Image from "next/image";
import logo_visa from "@/public/images/logo_visa.png";

import { toast } from "react-toastify";
export default function Booking({ flight }) {
  const [passengers, setPassengers] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedPassengerData = localStorage.getItem("passengerData");
      if (storedPassengerData) {
        const passengerData = JSON.parse(storedPassengerData);
        setPassengers(passengerData);
      }
    }
  }, []);

  const [isClosed, setIsClosed] = useState(false);

  let depClass;
  let arrClass;
  const departingSeat = passengers[0]?.departingSeat;
  const arrivingSeat = passengers[0]?.arrivingSeat;
  const price = Number(flight.price.slice(1));
  console.log(price);

  const classifySeat = (seat) => {
    if (!seat) return "economy";
    const lastChar = seat.slice(-1).toUpperCase();
    return ["A", "B", "C", "D"].includes(lastChar) ? "business" : "economy";
  };

  depClass = classifySeat(departingSeat);
  arrClass = classifySeat(arrivingSeat);

  const [emails, setEmails] = useState([""]);

  const handleInputChange = (index, value) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const addInput = () => {
    setEmails([...emails, ""]);
  };

  const sendEmails = () => {
    const validEmails = emails.filter((email) => email.trim() !== "");
    if (validEmails.length === 0) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Itinerary sent successfully!");
  };

  return (
    <div className="booking-details-container">
      {!isClosed && (
        <div className="confirmation-number-approval">
          <p>
            Your flight has been booked successfully! Your confirmation number
            is #381029404387
          </p>
          <button
            className="confirmation-close-btn"
            onClick={() => setIsClosed(true)}
          >
            <Close color={"#007b65"} />
          </button>
        </div>
      )}

      <div className="thank-you-message">
        <h3>Bon voyage, {passengers[0]?.firstName}!</h3>
        <h4>Confirmation number: #381029404387 </h4>
        <p>
          Thank you for booking your travel with Tripma! Below is a summary of
          your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your
          booking confirmation to your email address. You can also find this
          page again in My trips.
        </p>
      </div>

      <div className="flight-booking-summary">
        <h3>FLight summary</h3>
        <div className="flight-passenger-summary">
          <p className="dep-arrival-date">Departing February 25th, 2021</p>
          <FlightSummary flight={flight} />
          <p className="seat-class">
            Seat {departingSeat} ({depClass},window),
            {passengers[0]?.checkedBags} checked bags
          </p>
        </div>
        <div className="flight-passenger-summary">
          <p className="dep-arrival-date">Arriving March 21st, 2021 </p>
          <FlightSummary flight={flight} />
          <p className="seat-class">
            Seat {arrivingSeat} ({arrClass},window),
            {passengers[0]?.checkedBags} checked bags
          </p>
        </div>
      </div>

      <div className="price-breakdown">
        <h3>Price breakdown</h3>
        <div className="price-breakdown-table">
          <div className="price-breakdown-row">
            <p>Departing Flight </p>
            <p>${price / 2}</p>
          </div>
          <div className="price-breakdown-row">
            <p>Arriving Flight</p> <p>${price / 2}</p>
          </div>
          <div className="price-breakdown-row">
            <p>Seat upgrade (business) </p>
            <p>${199}</p>
          </div>
          <div className="price-breakdown-row">
            <p>Baggage fees </p> <p>${0}%</p>
          </div>
          <div className="price-breakdown-row">
            <p>Subtotal </p> <p>${702}</p>
          </div>
          <div className="price-breakdown-row">
            <p>Taxes (9.4%)</p> <p>${66}</p>
          </div>
          <div className="price-breakdown-total-row">
            <p>Total</p>
            <p>${768}</p>
          </div>
        </div>
      </div>

      <div className="payment-credit-card">
        <h3>Payment method</h3>
        <div className="visa-shape">
          <Image src={logo_visa} alt="visa" height={24} />
          <div className="related-visa-info">
            <p>{passengers[0]?.firstName + " " + passengers[0]?.lastName}</p>
            <div className="visa-number-expiry">
              <p>
                <small>••••••••••••</small>1234
              </p>
              <p>12/24</p>
            </div>
          </div>
        </div>
      </div>

      <div className="share-itinerary">
        <h3>Share your travel itinerary</h3>
        <p>
          You can email your itinerary to anyone by entering their email address
          here.
        </p>
        <div className="itinerary-emails-container">
          {emails.map((email, index) => (
            <input
              className="itinerary-email-input"
              key={index}
              type="email"
              value={email}
              placeholder="Email address"
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        <div className="itinerary-buttons">
          <button className="email-button" onClick={sendEmails}>
            Email itinerary
          </button>
          <button className="add-button" onClick={addInput}>
            Add another
          </button>
        </div>
      </div>
    </div>
  );
}
