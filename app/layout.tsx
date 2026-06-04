import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

export const metadata = {
  title: "Neighborhood Wash",
  description: "Professional Pressure Washing Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />

        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}