import { FaPlay, FaRegThumbsUp, FaVolumeUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6"; import generateSummary from "./generateSummary"
export default function ShowMain({show, thumbnail}) {
  return (
    <main className="show-main">
      <div className="container">
        <div className="show-img">
          <img
            src={thumbnail}
            alt="show image"
          />
        </div>
        <div className="content mt-3 m-sm-0">
          <div className="text-container text-center">
            <h4>{show.name}</h4>
            <p>{generateSummary(show.summary,100)}</p>
          </div>
          <div className="buttons d-flex flex-wrap align-items-center justify-content-center gap-2">
            <button className="red-btn">
              <FaPlay className="me-1" /> Play Now
            </button>
            <div className="controls d-flex gap-2">
              <FaPlus />
              <FaRegThumbsUp />
              <FaVolumeUp />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
