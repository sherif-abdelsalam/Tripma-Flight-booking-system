import Arrow from "../Icons/arrow->";

export function Title({ showArrow, children }) {
  return (
    <div className={showArrow ? "cards-title" : "cards-title-no-arrow"}>
      <p>{children}</p>
      {showArrow && (
        <div className="all-arrow">
          <p>All</p>
          <Arrow />
        </div>
      )}
    </div>
  );
}
