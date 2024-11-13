import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import generateSummary from "../utils/generateSummary";
import Loading from "../components/Loading";
export default function SearchResults() {
  const [showsDisplayed, setShowsDisplayed] = useState([]);
  const [moviesDisplayed, setMoviesDisplayed] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const fetchShows = async () => {
      const res = await fetch(
        `https://api.tvmaze.com/search/shows${location.search}`
      );
      const shows = await res.json();
      if (shows.length > 0) {
        setShowsDisplayed(
          shows
            .filter(
              (show) =>
                show.score > 0.55 &&
                show.show.image !== null &&
                show.show.summary !== null
            )
            .map((result) => {
              return result.show;
            })
        );
      }
    };
    const fetchMovies = async () => {
      const res = await fetch(
        `https://imdb.iamidiotareyoutoo.com/search${location.search}`
      );
      const mov = await res.json();
      setMoviesDisplayed(mov.description.slice(0, 5));
      setLoading(false);
    };
    fetchShows();
    fetchMovies();
  }, [location.search]);
  console.log(showsDisplayed);
  return loading ? (
    <Loading />
  ) : (
    <main>
      <div className="container">
        <h2>
          {"Search Results for " +
            location.search.slice(3).replaceAll(/\+|%20/gi, " ")}
        </h2>
        {showsDisplayed.length === 0 && moviesDisplayed.length === 0 && (
          <p className="display-6">Nothing Found</p>
        )}
        {showsDisplayed.length > 0 && (
          <>
            <h3 className="mt-5">Shows</h3>
            <div className="three-grid m-0">
              {showsDisplayed.map((show, index) => (
                <div
                  className="search-result d-flex align-items-start"
                  key={index}
                >
                  <Link to={`/show/${show.id}`} state={show}>
                    <img
                      src={show.image.medium}
                      alt={show.name}
                      className="me-3"
                    />
                  </Link>
                  <div className="search-info">
                    <Link to={`/show/${show.id}`} state={show}>
                      <h6>{show.name}</h6>
                    </Link>
                    <p>{generateSummary(show.summary, 100)}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {moviesDisplayed.length > 0 && (
          <>
            <h3 className="mt-5">Movies</h3>
            <div className="d-flex gap-3 flex-wrap ">
              {moviesDisplayed
                .filter(
                  (movie) =>
                    !showsDisplayed.some(
                      (show) => show.externals.imdb === movie["#IMDB_ID"]
                    )
                )
                .map((movie) => (
                  <div
                    className="search-result movie d-flex flex-column align-items-center"
                    key={movie["#IMDB_ID"]}
                  >
                    <Link to={`/movie/${movie["#IMDB_ID"].slice(2)}`}>
                      <img src={movie["#IMG_POSTER"]} alt={movie["#AKA"]} />
                    </Link>
                    <div className="search-info">
                      <Link to={`/movie/${movie["#IMDB_ID"].slice(2)}`}>
                        <h6 className="mt-3 text-center">{movie["#AKA"]}</h6>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
