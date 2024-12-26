import { PassengerProvider } from "./context/passengersContext";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Tripma",
  description:
    "Tripma is a travel agency that helps you find the best deals on flights, hotels, and packages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunitoSans.className}>
      <body>
        <PassengerProvider>{children}</PassengerProvider>
      </body>
    </html>
  );
}
