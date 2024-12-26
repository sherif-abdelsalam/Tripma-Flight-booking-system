"use client";
import "./seat-details.css";
import Arrow from "@/components/Icons/arrow->";
import Image from "next/image";
import Economy_Seats from "@/public/images/plane/Economy_Seats.svg";
import Business_Seats from "@/public/images/plane/Business_Seats.svg";
import { useEffect, useState } from "react";

export default function SeatDetails() {
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
  // console.log("////", passengers);

  return (
    <div className="seat-details">
      <div className="header">
        <div className="route-info">
          <div className="route">
            <p>SFO</p>
            <p className="desc">California, US</p>
          </div>
          <Arrow className="arrow" />
          <div className="route">
            <p>NRT</p>
            <p className="desc">Tokyo, Japan</p>
          </div>
        </div>
        <div className="line-divider"></div>

        <div className="info">
          <div className="route">
            <p>
              Feb 25 <span>|</span> 7:00AM
            </p>
            <p className="type">Departing</p>
          </div>
        </div>
        <div className="line-divider"></div>

        <div className="info">
          <div className="route">
            <p>Mar 21 | 12:15PM</p>
            <p className="type">Arriving</p>
          </div>
        </div>
      </div>

      <div className="class-options">
        <div>
          <Image src={Economy_Seats} alt="Economy Seats" />
          <div className="class-info">
            <p className="class-type">Economy</p>
            <p className="class-desc">
              Rest and recharge during your flight with extended leg room,
              personalized service, and a multi-course meal service.
            </p>
            <div className="class-options-divider-economy"></div>
          </div>

          <ul className="economy-class-options">
            <li>Built-in entertainment system</li>
            <li>Complimentary snacks and drinks</li>
            <li>One free carry-on and personal item</li>
          </ul>
        </div>

        <div>
          <Image src={Business_Seats} alt="Business Seats" />
          <div className="class-info">
            <p className="class-type">Business Class</p>
            <p className="class-desc">
              Rest and recharge during your flight with extended leg room,
              personalized service, and a multi-course meal service.
            </p>
            <div className="class-options-divider-business"></div>
          </div>

          <ul className="business-class-options">
            <li>Extended leg room</li>
            <li>First two checked bags free</li>
            <li>Priority boarding</li>
            <li>Personalized service</li>
            <li>Enhanced food and drink service</li>
            <li>Seats that recline 40% more than economy</li>
          </ul>
        </div>
      </div>

      <div className="footer">
        <div className="seat-info">
          <div className="seat-passenger-info">
            <p>Passenger 1</p>
            <p className="passenger-name">Temp</p>
          </div>
          <div className="seat-number">
            <p>Seat number</p>
            <p className="passenger-seat">--</p>
          </div>
        </div>

        <div className="actions-buttons">
          <div>
            <button className="save-close">Save and close</button>
          </div>
          <div>
            <button className="next-flight">Next flight</button>
          </div>
        </div>
      </div>
    </div>
  );
}
