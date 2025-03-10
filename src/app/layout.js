import "./globals.css";
import Header from "./components/Header";
import LenisProvider from "./components/LenisProvider";
import { ViewTransitions } from "next-view-transitions";
import Loader from "./components/Loader";

export const metadata = {
  title: "HUMMANA",
  description: "Retreats & Mentorships from Bali, Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <LenisProvider>
            <Loader />
            <Header />
            <div className="transition-wrapper">{children}</div>
          </LenisProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
