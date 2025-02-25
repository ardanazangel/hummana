import "./globals.css";
import Grid from "./components/Grid";
import Header from "./components/Header";
import LenisProvider from "./components/LenisProvider";

export const metadata = {
  title: "Hummana",
  description: "Retreats & Mentorships from Bali, Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          {/*<Grid></Grid>*/}
          <Header />
          <div className="transition-wrapper">{children}</div>
        </LenisProvider>
      </body>
    </html>
  );
}
