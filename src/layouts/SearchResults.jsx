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
    <main className="mb-20">
      <div className="container">
        <h2 className="font-bold text-[1.75rem] mb-4">
          {"Search Results for " +
            location.search.slice(3).replaceAll(/\+|%20/gi, " ")}
        </h2>
        {showsDisplayed.length === 0 && moviesDisplayed.length === 0 && (
          <p className="text-gray60 text-3xl">Nothing Found</p>
        )}
        {showsDisplayed.length > 0 && (
          <>
            <h3 className="mt-12 mb-4 text-2xl">Shows</h3>
            <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {showsDisplayed.map((show, index) => (
                <div
                  className=" flex bg-black06 rounded-lg p-3 shadow-md"
                  key={index}
                >
                  <Link className="flex-shrink-0" to={`/show/${show.id}`} state={show}>
                    <img
                      src={show.image.medium}
                      alt={show.name}
                      className="mr-4 w-[100px] rounded-lg cursor-pointer"
                    />
                  </Link>
                  <div className="text-balance">
                    <Link to={`/show/${show.id}`} state={show}>
                      <h6 className="w-fit cursor-pointer">{show.name}</h6>
                    </Link>
                    <p className="text-gray60 text-balance">
                      {generateSummary(show.summary, 100)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {moviesDisplayed.length > 0 && (
          <>
            <h3 className="mt-12 mb-4 text-2xl">Movies</h3>
            <div className="flex items-start gap-4 flex-wrap shadow-md ">
              {moviesDisplayed
                .filter(
                  (movie) =>
                    !showsDisplayed.some(
                      (show) => show.externals.imdb === movie["#IMDB_ID"]
                    )
                )
                .map((movie) => (
                  <div
                    className="w-[200px] flex flex-col items-center bg-black06 rounded-lg p-3"
                    key={movie["#IMDB_ID"]}
                  >
                    <Link to={`/movie/${movie["#IMDB_ID"].slice(2)}`}>
                      <img
                        src={movie["#IMG_POSTER"]}
                        alt={movie["#AKA"]}
                        className="flex-1 w-[100px] rounded-lg cursor-pointer"
                      />
                    </Link>
                    <Link to={`/movie/${movie["#IMDB_ID"].slice(2)}`}>
                      <h6 className="mt-4 text-center text-balance cursor-pointer w-fit">
                        {movie["#AKA"]}
                      </h6>
                    </Link>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
