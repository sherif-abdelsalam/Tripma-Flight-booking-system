import PassengerForm from "@/components/Flights/passenger/passenger-info";
import "../../../globals.css";
import SelectedFlights from "@/components/Flights/selected-flights";
import { getFlights } from "@/lib/flight-deels-info";
import bags_illustration from "@/public/images/bags_illustration.png";
import Image from "next/image";
export default async function PassengerInfo({ params, searchParams }) {
  const { id } = await params;
  const { travellersCount } = await searchParams;
  console.log("travellersCount", travellersCount);
  console.log("id", id);
  const flights = await getFlights();

  return (
    <div className="passenger-page">
      <PassengerForm travellersCount={travellersCount} flightId={+id} />
      <div div className="flights-bags">
        <SelectedFlights flights={flights} flightId={+id} />
        <Image src={bags_illustration} alt="" />
      </div>
    </div>
  );
}
