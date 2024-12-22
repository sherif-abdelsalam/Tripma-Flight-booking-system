import { getFlights } from "@/lib/flight-deels-info";
import "../../globals.css";
import FLightsList from "@/components/Flights/flight-list";
import PriceGrid from "@/components/Flights/price-grid";
import Search from "@/components/Hero/search";

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
  } = searchParams;

  console.log({
    fromwhere,
    towhere,
    tripType,
    departureDate,
    startDate,
    endDate,
    adultsNumber,
    minorsNumber,
  });
  console.log(fromwhere, towhere);
  const flights = await getFlights();
  return (
    <div className="flights-page">
      <div>
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
      </div>
      <div className="flights-prices">
        <div>
          <FLightsList flights={flights} />
        </div>
        <div>
          <PriceGrid />
        </div>
      </div>
    </div>
  );
}
