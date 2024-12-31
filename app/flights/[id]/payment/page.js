import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import PaymentForm from "@/components/payment/payment";
import "../../../globals.css";
import SelectedFlights from "@/components/Flights/selected-flights";
import { getFlights } from "@/lib/flight-deels-info";

export default async function Payment({ params }) {
  const { id } = await params;
  const flights = await getFlights();
  return (
    <>
      <Header />
      <div className="payment-page">
        <PaymentForm flightId={+id} />
        {/* <SelectedFlights flights={flights} flightId={+id} /> */}
      </div>

      <Footer />
    </>
  );
}
