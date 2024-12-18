export default function TO({ toOption, setToOption, placeHolder, children }) {
  const options = ["SFO", "ATL", "LAX", "STL", "PVG", "MSP", "NRT"];

  const handelOtion = (event) => {
    setToOption(event.target.value);
  };

  return (
    <div className="from-to">
      <div className="plane-icon">{children}</div>

      <div className="from-to-selector">
        <select
          value={toOption || placeHolder}
          onChange={handelOtion}
          className="options"
        >
          <option disabled>{placeHolder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="divider"></div>
    </div>
  );
}
