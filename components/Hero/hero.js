import HeroTitle from "./hero-title";
import "./hero.css";
import Search from "./search";
export default function Hero() {
  return (
    <main className="main-hero">
      <div className="hero-container">
        <HeroTitle />
        <Search />
      </div>
    </main>
  );
}
