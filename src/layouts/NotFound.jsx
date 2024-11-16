import Landing from "../components/Landing";
import { TbError404 } from "react-icons/tb";
export default function NotFound() {
  return (
    <>
      <Landing>
        <div className="absolute top-1/2 left-1/2 z-20 -translate-x-2/4 -translate-y-2/4 text-center">
          <TbError404 className="block size-32 sm:size-48 text-red45 fill-black06" />
          <h2 className="font-bold text-lg sm:text-2xl w-fit">Page Not Found</h2>
        </div>
      </Landing>

    </>
  );
}
