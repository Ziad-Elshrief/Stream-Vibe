import { FaSearch } from "react-icons/fa";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function Search({isExpanded}) {
  const navigate = useNavigate();
  function searchHandler(e) {
    e.preventDefault();
    if (e.target[0].value.trim().length > 0) {
      navigate({
        pathname: "/",
        search: createSearchParams({ q: e.target[0].value.trim() }).toString(),
      });
    }
  }
  return (
    <form
      className={`mt-3 shadow-md flex w-fit overflow-hidden transition-height delay-0 duration-300 ${isExpanded? "h-[54px]": "h-0"}`}
      onSubmit={(e) => searchHandler(e)}
    >
      <input
        type="text"
        name="search"
        id="search"
        className="w-64 text-sm text-gray60 p-4 bg-black08 rounded-l-md border border-black15 caret-red45 focus:border-red45 focus:outline-none border-r-0 placeholder:opacity-60"
        placeholder="Search for a Tv Show or Movie"
      />
      <button className="text-sm  bg-red45 text-white px-4 py-3.5 rounded-r-lg outline-none border-0 focus-within:border focus-within:border-black15 border-l-0">
        <FaSearch />
      </button>
    </form>
  );
}
