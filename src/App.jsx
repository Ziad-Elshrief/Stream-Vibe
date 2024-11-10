import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";
import SiteLayout from "./SiteLayout"; import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Support from "./Support";
import TVShow from "./TVShow";
import Movie from "./Movie";
import Prices from "./Prices";
import NotFound from "./NotFound";
import SearchResults from "./SearchResults";
import MoviesShows from "./MoviesShows";
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
