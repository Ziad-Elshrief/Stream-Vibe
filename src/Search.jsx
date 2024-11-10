import { FaSearch } from "react-icons/fa";
import { createSearchParams, useNavigate} from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  function searchHandler(e) {
    e.preventDefault();
    navigate({
      pathname: "/",
      search: createSearchParams({ q: e.target[0].value }).toString()
  })

  }
  return (
      <form className="search collapse mt-3" onSubmit={(e) => searchHandler(e)}>
        <div className="input-group">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a Tv Show or Movie"
          />
          <button className="red-btn ">
            <FaSearch />
          </button>
        </div>
      </form> 
  );
}
