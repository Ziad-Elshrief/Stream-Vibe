import { Outlet, useLocation } from "react-router-dom";

import Footer from "./layouts/Footer";
import Nav from "./layouts/Nav";
import Trial from "./components/Trial";
export default function SiteLayout() {
  const location = useLocation();
  return (
    <>
      <Nav key={location.key} /> 
      <Outlet />
      <Trial />
      <Footer />
    </>
  );
}
