export const getFlightDeels = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/flightDeels", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const flightDeels = await response.json();
    return flightDeels;
  } catch (error) {
    console.error("Error fetching flight deels", error);
  }
};

export const getPlacesToStay = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/placesToStay", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const placesToStay = await response.json();
    return placesToStay;
  } catch (error) {
    console.error("Error fetching places to stay", error);
  }
};

export const getFlightsData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/flights", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const flightsData = await response.json();
    return flightsData;
  } catch (error) {
    console.error("Error fetching flights data", error);
  }
};
