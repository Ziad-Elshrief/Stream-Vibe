import { FaPlay, FaRegThumbsUp, FaVolumeUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import generateSummary from "../utils/generateSummary";
export default function ShowMain({ show, thumbnail }) {
  return (
    <main className="mb-20">
      <div className="container relative">
        <div className="relative after:absolute after:w-full after:h-full after:top-0 after:left-0 z-10 after:bg-gradient-to-t after:from-black after:to-transparent">
          <img src={thumbnail} alt="show image" className="w-full" />
        </div>
        <div className="mt-4 sm:m-0 sm:absolute sm:z-20 sm:bottom-0 sm:left-1/2 sm:pb-5 sm:-translate-x-2/4 ">
          <div className="mb-6 text-center">
            <h4 className="mb-4 text-2xl">{show.name}</h4>
            <p className="text-gray60 text-balance">
              {generateSummary(show.summary, 100)}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button className=" w-fit text-sm  bg-red45 text-white px-4 py-3.5 rounded-lg outline-none border-0 focus-within:border focus-within:border-black15">
              <FaPlay className="mr-2 mb-1 inline-block" /> Play Now
            </button>
            <div className="flex gap-2">
              <FaPlus className="size-7" />
              <FaRegThumbsUp className="size-7" />
              <FaVolumeUp className="size-7" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
