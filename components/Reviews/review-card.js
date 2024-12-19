import Image from "next/image";
import Ratings from "./Rating";
export default function ReviewCard({ card }) {
  const rate = card.rating;
  console.log(rate);
  return (
    <div className="review-card">
      <Image src={card.avatarUrl} alt={card.name} width={48} height={48} />
      <div className="review-card-content">
        <div>
          <p className="name">{card.name}</p>
          <p className="location">
            {card.location} | {card.date}
          </p>
        </div>
        <div>
          {/* <p className="rating">
            {[...Array(5)].map((_, i) => {
              const ratingValue = i + 1;
              return (
                <span key={i}>
                  <i
                    style={{
                      color: rate >= ratingValue ? "#FFD700" : "#C0C0C0",
                    }}
                    className={
                      rate >= ratingValue
                        ? "fa fa-star"
                        : rate >= ratingValue - 0.5
                        ? "fa fa-star-half-o"
                        : "fa fa-star-o"
                    }
                  ></i>
                </span>
              );
            })}
          </p> */}
          <Ratings rate={card.rating} />
        </div>

        <p className="description">{card.description}</p>
      </div>
    </div>
  );
}
