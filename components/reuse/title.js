import Arrow from "../Icons/arrow->";

export function Title({ children }) {
  return (
    <div className="hotels-title">
      <p>{children}</p>
      <div className="all-arrow">
        <p>All</p>
        <Arrow />
      </div>
    </div>
  );
}
