import Prices from "../components/Prices";
import Landing from "../components/Landing";
import Devices from "../components/Devices";
import Gernes from "../components/Gernes";
import SiteInfo from "../components/SiteInfo";
import Logo from "../assets/images/Abstract Design.png";

export default function Home() {
  return (
    <>
      <Landing>
        <img src={Logo} alt="Logo" id="logo" />
      </Landing>
      <SiteInfo />
      <Gernes />
      <Devices />
      <Prices />
    </>
  );
}
