import Hero from "@/components/Hero/hero";
import FlightDeels from "@/components/Flight-deels/flight-deels";
import PlacesToStay from "@/components/places/places-stay";
import Review from "@/components/Reviews/review";
import CookiesNotification from "@/components/Header/cookiesNotification";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import "./globals.css";
export default function Home() {
  return (
    <>
      <Header />
      <div className="home-page">
        <Hero />
        <FlightDeels />
        <PlacesToStay />
        <Review />
        <Footer />
      </div>
      <CookiesNotification />
    </>
  );
}
