import { useLocation } from "react-router-dom";
import NavBar from "./Components/Header/NavBar";
import Footer from "./Components/Footer/Footer";
import Footer2 from "./Components/Footer/Footer2";

export default function Layout({ children }) {
  const location = useLocation();
  const hideNavAndFooter = location.pathname.startsWith("/admin/dashboard");

  return (
    <>
      {!hideNavAndFooter && <NavBar />}
      {children}
      {!hideNavAndFooter && <Footer />}
    </>
  );
}