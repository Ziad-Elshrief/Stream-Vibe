import { GrAppsRounded } from "react-icons/gr";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoLanguage, IoTodaySharp } from "react-icons/io5";
export default function SideInfo({info ,director}) {
  const rating = info.rating.average;
  return (
    <aside className="bg-black10 border border-black15 rounded-[10px] mb-5 p-[30px]">
      <div className="mb-6">
        <h5 className="text-gray60 mb-2">
          <IoTodaySharp className="mb-1 mr-2 inline-block" /> Release Year
        </h5>
        {info.premiered.match(/\d{4}/gim)}
      </div>
      <div className="mb-6">
      <h5 className="text-gray60 mb-2">
          <IoLanguage className="mb-1 mr-2 inline-block" /> Language
        </h5>
        {info.language}
      </div>
      <div className="mb-6">
      <h5 className="text-gray60 mb-2">
          <GrAppsRounded className="mb-1 mr-2 inline-block" /> Genres
        </h5>
        <ul className="flex flex-wrap gap-[10px]">
          {info.genres.map((genre)=> <li key={genre} className="text-sm rounded-md bg-black08 border border-black15 py-1.5 px-3">{genre}</li>)}
        </ul>
      </div>
      <div className="mb-6">
      <h5 className="text-gray60 mb-2">
          <FaStar className="mb-1 mr-2 inline-block" /> Rating
        </h5>
        <div className="text-xl text-red45">
          {Array(Math.floor(rating/2)).fill(0).map((x ,i) => <FaStar className="mb-1 inline-block" key={i}/>)}
          {rating/2 - Math.floor(rating/2) >= 0.5 && <FaStarHalfAlt className="mb-1 inline-block" />}
          <span className="ml-2.5 text-white">{rating}</span>
        </div>
      </div>
      {director &&  <div className="mb-6">
        <h5 className="text-gray60 mb-2">Director</h5>
        {info.director}
      </div> }
    </aside>
  );
}
