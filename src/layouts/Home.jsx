import Prices from "../components/Prices";
import Landing from "../components/Landing";
import Devices from "../components/Devices";
import Genres from "../components/Genres";
import SiteInfo from "../components/SiteInfo";
import Logo from "../assets/images/Abstract Design.png";

export default function Home() {
  return (
    <>
      <Landing>
        <img
          src={Logo}
          alt="Logo"
          className="absolute top-1/2 left-1/2 z-3 w-1/4 opacity-85 -translate-x-2/4 -translate-y-2/4 "
        />
      </Landing>
      <SiteInfo />
      <Genres />
      <Devices />
      <Prices />
    </>
  );
}
