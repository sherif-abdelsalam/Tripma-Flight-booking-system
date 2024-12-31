import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import { getFlights } from "@/lib/flight-deels-info";
import "../../../globals.css";
import Booking from "@/components/Booking/booking";

export default async function FlightSummary({ params }) {
  const { id } = await params;
  const flights = await getFlights();
  const flight = flights.find((flight) => flight.id === +id);

  return (
    <>
      <Header />
      <div className="booking-details">
        <Booking flight={flight} />
      </div>
      <Footer />
    </>
  );
}
