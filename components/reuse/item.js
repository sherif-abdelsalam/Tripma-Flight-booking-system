import Image from "next/image";
import "../Flight-deels/hotels.css";
export default function CardItem({ color, card }) {
  const title_splitted = card.title.split(" ");
  const title_city = title_splitted[title_splitted.length - 1];
  const title = title_splitted.slice(0, title_splitted.length - 1).join(" ");
  return (
    <>
      <div>
        <Image
          src={card.imageUrl}
          alt={card.title}
          width={600}
          height={400}
          loading="lazy"
          layout="responsive"
        />
      </div>
      <div className="hotel-card-info">
        <div className="hotel-card-title">
          <p>
            {title} <span style={{ color }}>{title_city}</span>
          </p>
          {card.price && <p className="price">{card.price}</p>}
        </div>
        <div className="hotel-card-description">
          <p>{card.description}</p>
        </div>
      </div>
    </>
  );
}
