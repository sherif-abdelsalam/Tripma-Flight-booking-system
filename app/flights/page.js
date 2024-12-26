import { getFlights, getJapanPlaces, getSFO } from "@/lib/flight-deels-info";
import "../globals.css";
import FLightsList from "@/components/Flights/flight-list";
import Search from "@/components/Hero/search";
import JapanPlaces from "@/components/Flights/japan-places";
import SFO from "@/components/Flights/sfo";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

export default async function FLights({ searchParams }) {
  const {
    fromwhere,
    towhere,
    tripType,
    departureDate,
    startDate,
    endDate,
    adultsNumber,
    minorsNumber,
  } = await searchParams;

  const flights = await getFlights();
  const japanPlaces = await getJapanPlaces();
  const sfo = await getSFO();
  return (
    <>
      <Header />
      <div className="flights-page">
        <Search
          from={fromwhere}
          to={towhere}
          trip={tripType}
          dep={new Date(departureDate)}
          start={new Date(startDate)}
          end={new Date(endDate)}
          adults={+adultsNumber}
          minors={+minorsNumber}
        />
        <div>
          <FLightsList
            flights={flights}
            tripType={tripType}
            travellersNumber={Number(adultsNumber) + Number(minorsNumber)}
          />
        </div>

        <JapanPlaces japanPlaces={japanPlaces} />
        <SFO sfo={sfo} />
        <Footer />
      </div>
    </>
  );
}
