import Popular from "../components/Popular";
import { popularMovies, popularShows } from "../data/popular";

export default function MoviesShows() {
  return (
    <main>
      <div className="container">
        <h1 className="red-btn mb-3">Shows </h1>
        <Popular type="show" title="Popular Shows" list={popularShows} />
        <h1 className="red-btn mb-3">Movies </h1>
        <Popular type="movie" title="Popular Movies" list={popularMovies} />
      </div>
    </main>
  );
}
