import { GrAppsRounded } from "react-icons/gr";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoLanguage, IoTodaySharp } from "react-icons/io5";
export default function SideInfo({info ,director}) {
  const rating = info.rating.average;
  return (
    <aside className="show-section col-lg-4">
      <div className="side-info">
        <h5>
          <IoTodaySharp className="mb-1" /> Release Year
        </h5>
        {info.premiered.match(/\d{4}/gim)}
      </div>
      <div className="side-info">
        <h5>
          <IoLanguage className="mb-1" /> Language
        </h5>
        {info.language}
      </div>
      <div className="side-info">
        <h5>
          <GrAppsRounded className="mb-1" /> Genres
        </h5>
        <ul className="d-flex flex-wrap">
          {info.genres.map((genre)=> <li key={genre}>{genre}</li>)}
        </ul>
      </div>
      <div className="side-info">
        <h5>
          <FaStar className="mb-1" /> Rating
        </h5>
        <div className="rating">
          {Array(Math.floor(rating/2)).fill(0).map((x ,i) => <FaStar className="mb-1" key={i}/>)}
          {rating/2 - Math.floor(rating/2) >= 0.5 && <FaStarHalfAlt className="mb-1" />}
          <span>{rating}</span>
        </div>
      </div>
      {director && <div className="side-info">
        <h5>Director</h5>
        {info.director}
      </div> }
    </aside>
  );
}
