import Prices from "./Prices";
import Landing from "./Landing";
import Devices from "./Devices";
import Gernes from "./Gernes";
import SiteInfo from "./SiteInfo";
import Logo from "./assets/images/Abstract Design.png";

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
