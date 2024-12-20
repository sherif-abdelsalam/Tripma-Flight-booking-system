import "../globals.css";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["200", "400", "300", "400", "500", "600", "700", "800", "900"], // Specify weights you need
  style: ["normal", "italic"], // Optional, specify styles
});
export default function Layout({ children }) {
  return (
    <html lang="en" className={nunitoSans.className}>
      <body>{children}</body>
    </html>
  );
}
