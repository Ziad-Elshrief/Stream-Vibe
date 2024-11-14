import Landing from "../components/Landing";
import { TbError404 } from "react-icons/tb";
export default function NotFound() {
  return (
    <>
      <Landing>
        <div className="absolute top-1/2 left-1/2 z-20 w-1/4  -translate-x-2/4 -translate-y-2/4 ">
          <TbError404 className="block size-48 text-red45 fill-black06" />
          <h2 className="font-bold text-2xl">Page Not Found</h2>
        </div>
      </Landing>
    </>
  );
}
