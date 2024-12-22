import CardItem from "../reuse/item";
import { Title } from "../reuse/title";
import "./japan-places.css";
export default function JapanPlaces({ japanPlaces }) {
  return (
    <div className="places-container">
      <div>
        <Title showArrow={true}>
          Find
          <span style={{ color: "#605DEC" }}> places to stay </span> in Japan
        </Title>
      </div>

      <div className="places-cards">
        {japanPlaces.map((place) => (
          <div key={place.id} className="card">
            <CardItem color="#605DEC" card={place} />
          </div>
        ))}
      </div>
    </div>
  );
}
