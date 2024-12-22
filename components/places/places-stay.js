import { getPlacesToStayInfo } from "@/lib/flight-deels-info";
import { Title } from "../reuse/title";
import "./places-to-stay.css";
import CardItem from "../reuse/item";

export default async function PlacesToStay() {
  const places = await getPlacesToStayInfo();
  return (
    <div className="places-container">
      <div>
        <Title showArrow={true}>
          Explore unique
          <span style={{ color: "#22C3A6" }}> places to stay </span>
        </Title>
      </div>
      <div className="places-cards">
        {places.map((place) => (
          <div key={place.id} className="card">
            <CardItem color="#22C3A6" card={place} />
          </div>
        ))}
      </div>
      <div className="btn">
        <button className="places-btn">Explore more stay</button>
      </div>
    </div>
  );
}
