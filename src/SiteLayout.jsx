import { Outlet, useLocation } from "react-router-dom";

import Footer from "./Footer";
import Nav from "./Nav";
import Trial from "./Trial";
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
