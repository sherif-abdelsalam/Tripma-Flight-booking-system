import Hero from "@/components/Hero/hero";
import FlightDeels from "@/components/Flight-deels/flight-deels";
import PlacesToStay from "@/components/spaces/places-stay";
import Review from "@/components/Reviews/review";
import CookiesNotification from "@/components/Header/cookiesNotification";

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <FlightDeels />
      <PlacesToStay />
      <Review />
      <CookiesNotification />
    </main>
  );
}
