"use client";
import { useState } from "react";
import "./filter-buttons.css";

const FilterButtons = () => {
  const filters = [
    { label: "Max price", options: ["$100", "$200", "$300"] },
    { label: "Shops", options: ["Shop 1", "Shop 2", "Shop 3"] },
    { label: "Times", options: ["Morning", "Afternoon", "Evening"] },
    { label: "Airlines", options: ["Airline A", "Airline B", "Airline C"] },
    { label: "Seat class", options: ["Economy", "Business"] },
    // { label: "More", options: ["Option 2", "Option 3"] },
  ];

  return (
    <div className="filter-buttons-container">
      {filters.map((filter, index) => (
        <Dropdown key={index} label={filter.label} options={filter.options} />
      ))}
    </div>
  );
};

const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {label}
        <span className="dropdown-arrow">{isOpen ? "\u25B2" : "\u25BE"}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, idx) => (
            <div key={idx} className="dropdown-item">
              {option}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterButtons;
