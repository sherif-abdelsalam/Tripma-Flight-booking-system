import CardItem from "../reuse/item";
import { Title } from "../reuse/title";
import "./japan-places.css";
export default function SFO({ sfo }) {
  return (
    <div className="places-container">
      <div>
        <Title showArrow={true}>
          People in
          <span style={{ color: "#605DEC" }}> San Francisco </span> also
          searched for
        </Title>
      </div>

      <div className="places-cards">
        {sfo.map((place) => (
          <div key={place.id} className="card">
            <CardItem color="#605DEC" card={place} />
          </div>
        ))}
      </div>
    </div>
  );
}
