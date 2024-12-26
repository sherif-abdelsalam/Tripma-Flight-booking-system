import "../../globals.css";
import SelectedFlights from "@/components/Flights/selected-flights";
import { getFlights } from "@/lib/flight-deels-info";
import bags_illustration from "@/public/images/bags_illustration.png";
import Image from "next/image";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import Passengers from "@/components/Flights/passenger/passenger-info";
export default async function PassengerInfo({ params, searchParams }) {
  const { id } = await params;
  const { travellersCount, tripType } = await searchParams;

  console.log("id", id);
  const flights = await getFlights();

  return (
    <>
      <Header />
      <div className="passenger-page">
        <Passengers
          travellersCount={travellersCount}
          tripType={tripType}
          flightId={+id}
        />
        <div div className="flights-bags">
          <SelectedFlights flights={flights} flightId={+id} />
          <Image src={bags_illustration} alt="" />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
