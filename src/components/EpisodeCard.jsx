import { FaRegClock } from "react-icons/fa";
import generateSummary from "../utils/generateSummary";

export default function EpisodeCard({ index, ep }) {
  const episodeNumber = index < 10 ? "0" + index : index;
  const summary = ep.summary !== null ? ep.summary : "no summary";
  const image = ep.image !== null ? ep.image.medium : "";
  return (
    <div className="episode-card border-t border-black15 py-[30px] md:flex md:items-center md:space-x-4">
      <span className="text-gray60 text-2xl">{episodeNumber}</span>
      <img
        src={image}
        alt={ep.name}
        className="w-[150px] rounded-xl border border-black15 inline-block"
      />
      <div className="mt-4 md:mt-0 flex-[1_1_0%]">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="text-lg font-medium ">{ep.name}</h5>
          <div className="min-w-fit bg-black08 border border-black15 rounded-md text-sm text-gray60 p-1">
            <FaRegClock className="mb-1 inline-block" /> {ep.runtime} min
          </div>
        </div>
        <p
          className="text-gray60 text-balance"
          title={generateSummary(summary, 0)}
        >
          {generateSummary(summary, 150)}
        </p>
      </div>
    </div>
  );
}
