import Hero from "@/components/Hero/hero";
import FlightDeels from "@/components/Flight-deels/flight-deels";
import PlacesToStay from "@/components/spaces/places-stay";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <FlightDeels />
      <PlacesToStay />
    </div>
  );
}
