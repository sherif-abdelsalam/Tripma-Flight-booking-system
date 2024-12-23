export function filterFlights(flights, selectedValues) {
  if (Object.keys(selectedValues).length === 0) {
    // If no filters are selected, return all flights
    return flights;
  }

  return flights.filter((flight) => {
    return Object.entries(selectedValues).every(([key, value]) => {
      switch (key) {
        case "Max price":
          const maxPrice = parseInt(value.replace(/[^\d.-]/g, "")); // Extract number from string
          const flightPrice = parseInt(flight.price.replace(/[^\d.-]/g, ""));
          return flightPrice <= maxPrice;

        case "Airlines":
          return flight.airline === value;

        case "Stops":
          if (value === "Nonstop") return flight.stops === null;
          if (value === "1 stop") return flight.stops === 1;
          if (value === "2 stops") return flight.stops === 2;
          return true;

        case "Times":
          const selectedStartHour = convertTimeTo24Hour(value);
          const [flightStartTime] = flight.times.split(" - ");
          const flightStartHour = convertTimeTo24Hour(flightStartTime);

          return flightStartHour >= selectedStartHour;

        // case "Seat class":
        //   return flight.seatClass === value; // Assuming seatClass exists on flight

        default:
          return true;
      }
    });
  });
}

const convertTimeTo24Hour = (time) => {
  const [hour, minute] = time.split(":");
  const isPM = time.includes("PM");
  const hour24 = parseInt(hour);

  if (isPM && hour24 !== 12) {
    return (hour24 + 12) * 60 + parseInt(minute);
  }

  if (!isPM && hour24 === 12) {
    return parseInt(minute);
  }

  return hour24 * 60 + parseInt(minute);
};
