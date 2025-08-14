import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
        <ToastContainer
          position="top-right"
        />
      </body>
    </html>
  );
}
