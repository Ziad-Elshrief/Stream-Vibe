import Popular from "../components/Popular";
import { popularMovies, popularShows } from "../data/popular";

export default function MoviesShows() {
  return (
    <main className="mb-20">
      <div className="container">
        <h1 className="w-fit text-sm  bg-red45 text-white px-4 py-3.5 rounded-lg outline-none border-0 focus-within:border focus-within:border-black15 mb-4">Shows </h1>
        <Popular type="show" title="Popular Shows" list={popularShows} />
        <h1 className="w-fit text-sm  bg-red45 text-white px-4 py-3.5 rounded-lg outline-none border-0 focus-within:border focus-within:border-black15 mb-4">Movies </h1>
        <Popular type="movie" title="Popular Movies" list={popularMovies} />
      </div>
    </main>
  );
}
