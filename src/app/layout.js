import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "HUMMANA",
  description: "The official Next.js Course Dashboard, built with App Router.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
