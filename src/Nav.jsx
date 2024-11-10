import { FaBars, FaSearch } from "react-icons/fa";
import Logo from "./assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="logo col-4 col-md-2 p-0">
            <Link to="/"><img src={Logo} alt="Stream Vibe Logo" /></Link>
          </div>
          <div className="links collapse mt-2 d-lg-block" id="links">
            <ul className="d-flex flex-column flex-lg-row row-gap-2">
              <li className="link"><NavLink to={"/"}>Home</NavLink></li>
              <li className="link">
                <NavLink to={"/movies-shows"}>Movies & Shows</NavLink>
              </li> 
              <li className="link"><NavLink to={"/support"}>Support</NavLink></li>
              <li className="link"><NavLink to={"/subscriptions"}>Subscriptions</NavLink></li>
            </ul>
          </div>
          <div className="controls p-0">
            <button
              className="d-lg-none control-btn"
              data-bs-toggle="collapse"
              data-bs-target="#links"
              aria-expanded="false"
              aria-controls="links"
            >
              <FaBars />
            </button>
            <button
              className="control-btn"
              data-bs-toggle="collapse"
              data-bs-target=".search"
              aria-expanded="false"
              aria-controls="search"
            >
              <FaSearch />
            </button>
          </div>
        </div>
        <Search/>
      </div>
    </nav>
  );
}
