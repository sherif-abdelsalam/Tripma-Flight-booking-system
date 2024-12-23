"use client";

import { useState } from "react";
import "./passenger-form.css";
import { Minus, Plus } from "@/components/Icons/plus-minus-icons";
import Link from "next/link";

export default function PassengerForm({ travellersCount, flightId }) {
  const [passengerData, setPassengerData] = useState(
    Array.from({ length: travellersCount }, () => ({
      firstName: "",
      middleName: "",
      lastName: "",
      suffix: "",
      dateOfBirth: "",
      email: "",
      phoneNumber: "",
      redressNumber: "",
      knownTravellerNumber: "",
      checkedBags: 1,
    }))
  );

  const [emergencyContactData, setEmergencyContactData] = useState({
    sameAsPassenger: false,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handlePassengerInputChange = (index, e) => {
    const { name, value } = e.target;
    setPassengerData((prev) =>
      prev.map((passenger, i) =>
        i === index ? { ...passenger, [name]: value } : passenger
      )
    );
  };

  const handleEmergencyContactInputChange = (e) => {
    const { name, value } = e.target;
    setEmergencyContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSameAsPassengerChange = () => {
    setEmergencyContactData((prev) => ({
      ...prev,
      sameAsPassenger: !prev.sameAsPassenger,
      ...(prev.sameAsPassenger
        ? { firstName: "", lastName: "", email: "", phone: "" }
        : {
            firstName: passengerData[0]?.firstName || "",
            lastName: passengerData[0]?.lastName || "",
            email: passengerData[0]?.email || "",
            phone: passengerData[0]?.phoneNumber || "",
          }),
    }));
  };

  const handleCheckedBagsChange = (index, delta) => {
    setPassengerData((prev) =>
      prev.map((passenger, i) =>
        i === index
          ? {
              ...passenger,
              checkedBags: Math.max(0, passenger.checkedBags + delta),
            }
          : passenger
      )
    );
  };

  const [isActive, setIsActive] = useState(false);

  const checkAllTokens = () => {
    // Check passenger data
    for (const passenger of passengerData) {
      if (
        !passenger.firstName ||
        !passenger.lastName ||
        !passenger.dateOfBirth ||
        !passenger.email ||
        !passenger.phoneNumber ||
        !passenger.redressNumber ||
        !passenger.knownTravellerNumber
      ) {
        alert("Please fill all the required fields for passengers");
        return; // Exit the function if a required field is missing
      }
    }

    // Check emergency contact data
    if (
      !emergencyContactData.firstName ||
      !emergencyContactData.lastName ||
      !emergencyContactData.email ||
      !emergencyContactData.phone
    ) {
      alert("Please fill all the required fields for emergency contact");
      return; // Exit the function if a required field is missing
    }

    // If all fields are valid, toggle the `isActive` state
    setIsActive((prev) => !prev);
  };

  return (
    <form>
      <div className="form-header">
        <h2 className="form-title">Passengers information</h2>
        <p className="description">
          Enter the required information for each traveler and be sure that it
          exactly matches the government-issued ID presented at the airport.
        </p>
      </div>

      {passengerData.map((passenger, index) => (
        <div key={index}>
          <div>
            <h2 className="sub-title">Passenger {index + 1}</h2>
          </div>

          <div>
            <div className="passenger-info">
              <input
                type="text"
                name="firstName"
                placeholder="First name*"
                value={passenger.firstName}
                onChange={(e) => handlePassengerInputChange(index, e)}
                required
              />
              <input
                type="text"
                name="middleName"
                placeholder="Middle"
                value={passenger.middleName}
                onChange={(e) => handlePassengerInputChange(index, e)}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name*"
                value={passenger.lastName}
                onChange={(e) => handlePassengerInputChange(index, e)}
                required
              />
            </div>
            <div className="passenger-info">
              <input
                type="text"
                name="suffix"
                placeholder="Suffix"
                value={passenger.suffix}
                onChange={(e) => handlePassengerInputChange(index, e)}
              />
              <input
                type="date"
                name="dateOfBirth"
                value={passenger.dateOfBirth}
                onChange={(e) => handlePassengerInputChange(index, e)}
                required
              />
            </div>
            <div className="passenger-info">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={passenger.email}
                onChange={(e) => handlePassengerInputChange(index, e)}
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone*"
                value={passenger.phoneNumber}
                onChange={(e) => handlePassengerInputChange(index, e)}
                required
              />
            </div>
            <div className="passenger-info">
              <input
                type="text"
                name="redressNumber"
                placeholder="Redress number"
                value={passenger.redressNumber}
                onChange={(e) => handlePassengerInputChange(index, e)}
                required
              />
              <input
                type="text"
                name="knownTravellerNumber"
                placeholder="Known Traveller Number*"
                value={passenger.knownTravellerNumber}
                onChange={(e) => handlePassengerInputChange(index, e)}
                required
              />
            </div>
          </div>

          {index === 0 && (
            <div>
              <p className="sub-title">Emergency contact information</p>
              <div className="same-as-passenger">
                <div>
                  <input
                    type="checkbox"
                    checked={emergencyContactData.sameAsPassenger}
                    onChange={handleSameAsPassengerChange}
                  />
                </div>
                <p>Same as Passenger 1</p>
              </div>

              <div className="passenger-info">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name*"
                  value={emergencyContactData.firstName}
                  onChange={handleEmergencyContactInputChange}
                  disabled={emergencyContactData.sameAsPassenger}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name*"
                  value={emergencyContactData.lastName}
                  onChange={handleEmergencyContactInputChange}
                  disabled={emergencyContactData.sameAsPassenger}
                  required
                />
              </div>
              <div className="passenger-info">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address*"
                  value={emergencyContactData.email}
                  onChange={handleEmergencyContactInputChange}
                  disabled={emergencyContactData.sameAsPassenger}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number*"
                  value={emergencyContactData.phone}
                  onChange={handleEmergencyContactInputChange}
                  disabled={emergencyContactData.sameAsPassenger}
                  required
                />
              </div>
            </div>
          )}

          <div>
            <p className="sub-title">Bag Information</p>
            <p className="description">
              Each passenger is allowed one free carry-on bag and one personal
              item. First checked bag for each passenger is also free. Second
              bag check fees are waived for loyalty program members.
            </p>

            <div className="bag-info">
              <div className="count">
                <p>Passenger {index + 1}</p>
                <p className="passenger-name">{`${passenger.firstName} ${passenger.lastName}`}</p>
              </div>
              <div className="count">
                <p>Checked bags</p>
                <div className="bag-controls">
                  <button
                    type="button"
                    onClick={() => handleCheckedBagsChange(index, -1)}
                    disabled={passenger.checkedBags === 0}
                  >
                    <Minus />
                  </button>
                  <p>{passenger.checkedBags}</p>
                  <button
                    type="button"
                    onClick={() => handleCheckedBagsChange(index, 1)}
                  >
                    <Plus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="buttons">
        <div>
          <button
            type="button"
            className="submit-button"
            onClick={checkAllTokens}
          >
            Save and Close
          </button>
        </div>
        <div>
          {isActive ? (
            <Link href={`/flights/${flightId}/flight_seats`}>
              <button type="submit" className="select-seats-button-active">
                Select Seats
              </button>
            </Link>
          ) : (
            <button type="submit" className="select-seats-button">
              Select Seats
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
