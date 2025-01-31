import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Hummana",
  description: "Retreats & Mentorships from Bali, Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
