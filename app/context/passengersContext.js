"use client";

import { createContext, useContext, useState } from "react";

const PassengerContext = createContext();

export const PassengerProvider = ({ children }) => {
  const [passengerData, setPassengerData] = useState([]);
  const [emergencyContactData, setEmergencyContactData] = useState({});

  return (
    <PassengerContext.Provider
      value={{
        passengerData,
        setPassengerData,
        emergencyContactData,
        setEmergencyContactData,
      }}
    >
      {children}
    </PassengerContext.Provider>
  );
};

export const usePassengerContext = () => {
  const context = useContext(PassengerContext);
  if (!context) {
    throw new Error(
      "usePassengerContext must be used within a PassengerProvider"
    );
  }
  return context;
};
