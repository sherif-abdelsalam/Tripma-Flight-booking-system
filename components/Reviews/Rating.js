export default function Ratings({ rate }) {
  return (
    <p className="rating">
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i} className="rating-star">
            <i className={rate >= i + 1 ? "fa fa-star" : "fa fa-star-o"}></i>
          </span>
        );
      })}
    </p>
  );
}
