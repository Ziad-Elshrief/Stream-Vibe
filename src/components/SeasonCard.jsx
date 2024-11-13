import { useState } from "react";
import {FaArrowUp, FaArrowDown } from "react-icons/fa";
import EpisodeCard from "./EpisodeCard";
export default function SeasonCard({index , eps}) {
    const seasonNumber = index < 10 ? "0" + index : index;
    const [collapsed , setCollapsed ] =useState(null);
    const seasonEps = eps.filter((ep)=> ep.season === index);
  return (
    <div className="season-card">
      <div className="season-info d-flex align-items-center justify-content-between">
        <p>
          <span className="me-2">Season {seasonNumber}</span> {seasonEps.length} Episodes
        </p>
        <button
          data-bs-toggle="collapse"
          data-bs-target={`#season${seasonNumber}-eps`}
          aria-expanded="false"
          aria-controls="episodes"
          onClick={(e) => {
            setCollapsed(e.target.classList.value);
          }}
        >
         { collapsed === "collapsed" ? <FaArrowDown />: <FaArrowUp /> }
        </button>
      </div>
      <div className="episodes collapse" id={`season${seasonNumber}-eps`}>
          {seasonEps.map((ep ,index)=> <EpisodeCard index={index+1} key={index} ep={ep} />)}
      </div>
    </div>
  );
}
