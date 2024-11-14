import { FaBars, FaSearch } from "react-icons/fa";
import Logo from "../assets/images/Logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import Search from "../components/Search";
import { useState } from "react";

export default function Nav() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const location = useLocation();
  return (
    <nav className="py-6">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between">
          <Link to="/">
            <img
              src={Logo}
              alt="Stream Vibe Logo"
              className="w-full max-w-32"
            />
          </Link>
          <div
            className={`flex-[0_0_100%] lg:flex-initial bg-black06 rounded-lg p-2 border-[3px] border-black12 mt-2 shadow-md order-last lg:order-none ${
              isMenuExpanded ? "" : "hidden lg:block"
            }`}
            id="links"
          >
            <ul className="flex flex-col lg:flex-row gap-2">
              <li>
                <NavLink
                  className={`p-3 block text-sm hover:rounded-lg hover:bg-black10 ${
                    location.pathname === "/" ? "rounded-lg bg-black10" : ""
                  }`}
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="link">
                <NavLink
                  to={"/movies-shows"}
                  className={`p-3 block text-sm hover:rounded-lg hover:bg-black10 ${
                    location.pathname === "/movies-shows"
                      ? "rounded-lg bg-black10"
                      : ""
                  }`}
                >
                  Movies & Shows
                </NavLink>
              </li>
              <li className="link">
                <NavLink
                  to={"/support"}
                  className={`p-3 block text-sm hover:rounded-lg hover:bg-black10 ${
                    location.pathname === "/support"
                      ? "rounded-lg bg-black10"
                      : ""
                  }`}
                >
                  Support
                </NavLink>
              </li>
              <li className="link">
                <NavLink
                  to={"/subscriptions"}
                  className={`p-3 block text-sm hover:rounded-lg hover:bg-black10 ${
                    location.pathname === "/subscriptions"
                      ? "rounded-lg bg-black10"
                      : ""
                  }`}
                >
                  Subscriptions
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-fit space-x-3.5">
            <button
              className="lg:hidden"
              aria-expanded={isMenuExpanded}
              aria-controls="links"
              onClick={() => setIsMenuExpanded((prev) => !prev)}
            >
              <FaBars className="size-5" />
            </button>
            <button
              aria-expanded={isSearchExpanded}
              aria-controls="search"
              onClick={() => setIsSearchExpanded((prev) => !prev)}
            >
              <FaSearch className="size-5" />
            </button>
          </div>
        </div>
        {isSearchExpanded && <Search />}
      </div>
    </nav>
  );
}
