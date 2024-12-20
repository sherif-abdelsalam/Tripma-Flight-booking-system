import Footer from "@/components/Footer/footer";
import "../globals.css";
import Header from "@/components/Header/header";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["200", "400", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Tripma",
  description:
    "Tripma is a travel agency that helps you find the best deals on flights, hotels, and packages.",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en" className={nunitoSans.className}>
      <body>
        <Header />
        {modal}
        {children}
        <Footer />
      </body>
    </html>
  );
}
