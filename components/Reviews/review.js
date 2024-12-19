import { getReviews } from "@/lib/flight-deels-info";
import { Title } from "../reuse/title";
import ReviewCard from "./review-card";

import "./review.css";

export default async function Review() {
  const reviews = await getReviews();
  return (
    <div className="reviews-container">
      <Title showArrow={false}>
        What
        <span> Tripma</span> users are saying
      </Title>
      <ul className="reviews">
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewCard card={review} />
          </li>
        ))}
      </ul>
    </div>
  );
}
