import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import EpisodeCard from "./EpisodeCard";
export default function SeasonCard({ index, eps }) {
  const seasonNumber = index < 10 ? "0" + index : index;
  const [isExpanded, setIsExpanded] = useState(false);
  const seasonEps = eps.filter((ep) => ep.season === index);
  return (
    <div className="bg-black06 border border-black15 p-5 mb-5">
      <div className="flex items-center justify-between">
        <p className="text-gray60 text-balance">
          <span className="mr-2 text-white text-xl">Season {seasonNumber}</span>
          {seasonEps.length} Episodes
        </p>
        <button
          aria-label="show or hide episodes"
          className="w-fit  bg-black08 text-gray60 p-3 outline-none border border-black15 rounded-full focus-within:border-black10"
          aria-expanded={isExpanded}
          aria-controls="episodes"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? (
            <FaArrowUp className="size-6 pointer-events-none" />
          ) : (
            <FaArrowDown className="size-6 pointer-events-none" />
          )}
        </button>
      </div>
      <div
        className={`${isExpanded ? "pt-5" : "hidden"} `}
        id={`season${seasonNumber}-eps`}
      >
        {seasonEps.map((ep, index) => (
          <EpisodeCard index={index + 1} key={index} ep={ep} />
        ))}
      </div>
    </div>
  );
}
