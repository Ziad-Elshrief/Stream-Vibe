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
    <main className="mb-20">
      <div className="container">
        <h2 className="font-bold text-[1.75rem] mb-4">
          We Provide you streaming experience across various devices.
        </h2>
        <p className="text-gray60 text-balance">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
        <div className="mt-[60px] grid gap-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          <DeviceCard
            title="Smartphones"
            description={
              " StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          >
            <div className=" w-fit rounded-[10px] border border-black12 bg-black08 py-3 px-2 mr-3">
              <FaMobileButton className="fill-red45 size-7" />
            </div>
          </DeviceCard>
          <DeviceCard
            title="Tablet"
            description={
              " StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          >
            <div className="w-fit rounded-[10px] border border-black12 bg-black08 py-3 px-2 mr-3">
              <FaTablet className="fill-red45 size-7" />
            </div>
          </DeviceCard>
          <DeviceCard
            title="Smart TV"
            description={
              " StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          >
            <div className="w-fit rounded-[10px] border border-black12 bg-black08 py-3 px-2 mr-3">
              <FaTv className="fill-red45 size-7" />
            </div>
          </DeviceCard>
          <DeviceCard
            title="Laptops"
            description={
              " StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          >
            <div className="w-fit rounded-[10px] border border-black12 bg-black08 py-3 px-2 mr-3">
              <FaLaptop className="fill-red45 size-7" />
            </div>
          </DeviceCard>
          <DeviceCard
            title="Gaming Consoles"
            description={
              " StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          >
            <div className="w-fit rounded-[10px] border border-black12 bg-black08 py-3 px-2 mr-3">
              <FaGamepad className="fill-red45 size-7" />
            </div>
          </DeviceCard>
          <DeviceCard
            title="VR Headsets"
            description={
              " StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
            }
          >
            <div className="w-fit rounded-[10px] border border-black12 bg-black08 py-3 px-2 mr-3">
              <FaVrCardboard className="fill-red45 size-7" />
            </div>
          </DeviceCard>
        </div>
      </div>
    </main>
  );
}
