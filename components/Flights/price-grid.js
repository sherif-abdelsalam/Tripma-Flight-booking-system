import Image from "next/image";
import "./priceGrid.css";
import price_history from "@/public/images/price_history.png";
import { AreaChartHero } from "./chart";

export default function PriceGrid() {
  const dates = ["2/12", "2/13", "2/14", "2/15", "2/16"];
  const prices = [
    { date: "3/7", values: ["$837", "$592", "$592", "$1,308", "$837"] },
    { date: "3/8", values: ["$837", "$592", "$592", "$837", "$1,308"] },
    { date: "3/9", values: ["$624", "$592", "$624", "$592", "$592"] },
    { date: "3/10", values: ["$1,308", "$624", "$624", "$837", "$837"] },
    { date: "3/11", values: ["$592", "$624", "$1,308", "$837", "$624"] },
  ];

  return (
    <div className="price-grid-container">
      <p className="title">
        Price grid <small>(flexible dates)</small>{" "}
      </p>
      <div className="price-grid-table">
        <table className="price-grid">
          <thead>
            <tr>
              <th></th>
              {dates.map((date, index) => (
                <th key={index}>{date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {prices.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="row-header">{row.date}</td>
                {row.values.map((price, colIndex) => (
                  <td key={colIndex}>{price}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="price-history">
        <Image src={price_history} alt="Price History" width={460} />
        {/* <AreaChartHero /> */}
      </div>
    </div>
  );
}
