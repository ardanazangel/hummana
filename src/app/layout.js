import "./globals.css";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Header from "./components/Header";

export const metadata = {
  title: "Hummana",
  description: "Retreats & Mentorships from Bali, Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/*<Grid></Grid>*/}
        <Header />
        <div className="transition-wrapper">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
