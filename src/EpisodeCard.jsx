import { FaRegClock } from "react-icons/fa";
import generateSummary from "./generateSummary";

export default function EpisodeCard({index ,ep}) {
    const episodeNumber = index < 10 ? "0" + index : index;
    const summary = ep.summary !== null ? ep.summary : "no summary";
    const image = ep.image !== null ? ep.image.medium : "";
  return (
        <div className="episode-card d-md-flex align-items-center">
          <span>{episodeNumber}</span>
          <img
            src={image}
            alt={ep.name}
          />
          <div className="mt-3 m-md-0 ep-info">
            <div className="title-time d-flex align-items-center justify-content-between">
              <h5>{ep.name}</h5>
              <div className="time">
                <FaRegClock className="mb-1" /> {ep.runtime} min
              </div>
            </div>
            <p title={generateSummary(summary ,0)}>{generateSummary(summary , 150)}</p>
          </div>
        </div>
  );
}
