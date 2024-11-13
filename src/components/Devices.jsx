import { FaMobileButton } from "react-icons/fa6";
import {
  FaTablet,
  FaGamepad,
  FaLaptop,
  FaVrCardboard,
  FaTv,
} from "react-icons/fa";
import DeviceCard from "./DeviceCard";
export default function Devices() {
  return (
    <main className="devices">
      <div className="container">
        <h2>We Provide you streaming experience across various devices.</h2>
        <p>
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
        <div className="devices-types three-grid">
          <DeviceCard
            title="Smartphones"
            description={
              " StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          >
            <div className="device-icon">
              {" "}
              <FaMobileButton />
            </div>
          </DeviceCard>{" "}
          <DeviceCard
            title="Tablet"
            description={
              " StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          >
            <div className="device-icon">
              {" "}
              <FaTablet />
            </div>
          </DeviceCard>{" "}
          <DeviceCard
            title="Smart TV"
            description={
              " StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          >
            <div className="device-icon">
              {" "}
              <FaTv />
            </div>
          </DeviceCard>{" "}
          <DeviceCard
            title="Laptops"
            description={
              " StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          >
            <div className="device-icon">
              {" "}
              <FaLaptop />
            </div>
          </DeviceCard>{" "}
          <DeviceCard
            title="Gaming Consoles"
            description={
              " StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          >
            <div className="device-icon">
              {" "}
              <FaGamepad />
            </div>
          </DeviceCard>{" "}
          <DeviceCard
            title="VR Headsets"
            description={
              " StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          >
            <div className="device-icon">
              {" "}
              <FaVrCardboard />
            </div>
          </DeviceCard>
        </div>
      </div>
    </main>
  );
}
