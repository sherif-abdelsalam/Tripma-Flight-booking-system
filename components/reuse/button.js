import Image from "next/image";
import "./media-button.css";

export function Button({ imageTitle, children }) {
  return (
    <div className="media-button">
      <Image
        className="media-button-icon"
        src={`/images/media-icons/${imageTitle}.svg`}
        alt={imageTitle}
        width={18}
        height={18}
      />
      <button>{children}</button>
    </div>
  );
}
