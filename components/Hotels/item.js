import Image from "next/image";
export default function HotelCard({ card }) {
  console.log(card.title);
  return (
    <div className="hotel-card">
      <div className="hotel-card-image">
        <Image src={card.imageUrl} alt="hotel" width={400} height={400} />
      </div>
      <div className="hotel-card-info">
        <p>{card.title}</p>
        <p>{card.price}</p>
      </div>
      <div>
        <p>{card.description}</p>
      </div>
    </div>
  );
}
