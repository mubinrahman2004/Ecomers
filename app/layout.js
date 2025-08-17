import { ToastContainer } from "react-toastify";
import { cookies } from "next/headers";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";

export default async function RootLayout({ children }) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  console.log(accessToken);
  // if (accessToken) {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/ecommerce/profile",
      {
        method: "GET",
        headers: { accept: "application/json", Authorization: `${accessToken}` },
      }
    );
    const data = await response.json();
  // }
  return (
    <html lang="en">
      <body>
        <NavBar userData={data.data}/>
        {children}
        <Footer />
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
