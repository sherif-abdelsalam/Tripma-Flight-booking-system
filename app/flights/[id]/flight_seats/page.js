import Passengers from "@/components/Flights/passenger/passenger-info";
import PlaneSeatSelection from "@/components/Flights/seat-selection/plane-seat-selection";
import SeatDetails from "@/components/Flights/seat-selection/seat-details";
import DropNavBar from "@/components/Header/dropNavBar";
import { getFlights, getSeatsInfo } from "@/lib/flight-deels-info";

export default async function FLightSeats({ params, searchParams }) {
  const { id } = await params;
  const { travellersCount, tripType } = await searchParams;
  const seatsInfo = await getSeatsInfo();
  // const flights = await getFlights();
  // const flight = flights.find((flight) => flight.id === +id);

  return (
    <>
      <DropNavBar />
      <PlaneSeatSelection
        seatsInfo={seatsInfo}
        travellersCount={travellersCount}
        tripType={tripType}
      >
        <SeatDetails />
      </PlaneSeatSelection>
    </>
  );
}
