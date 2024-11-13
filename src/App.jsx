import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";
import SiteLayout from "./SiteLayout"; import Home from "./layouts/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Support from "./layouts/Support";
import TVShow from "./layouts/TVShow";
import Movie from "./layouts/Movie";
import Prices from "./components/Prices";
import NotFound from "./layouts/NotFound";
import SearchResults from "./layouts/SearchResults";
import MoviesShows from "./layouts/MoviesShows";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
     <Routes >
     <Route path="/" element={<SiteLayout />}>
          <Route index element={location.search === "" ? <Home /> : <SearchResults/>} />
          <Route path="/support" element={<Support />} />
          <Route path="/show/:id" element={<TVShow />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/movies-shows" element={<MoviesShows />} />
          <Route path="/subscriptions" element={<Prices />} />
          <Route path="*" element={<NotFound />} />
        </Route>
     </Routes>
    </>
  );
}

export default App;
