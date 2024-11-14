import { popularShows, popularMovies } from "../data/popular";
import Popular from "./Popular";

export default function Genres() {
  return (
    <main className="mb-20">
      <div className="container">
        <h2 className="font-bold text-[1.75rem] mb-4">
          Explore our wide variety of categories
        </h2>
        <p className="text-gray60 text-balance mb-10">
          Whether you&apos;re looking for a comedy to make you laugh, a drama to
          make you think, or a documentary to learn something new
        </p>
        <Popular type="show" title="Popular Shows" list={popularShows} />
        <Popular type="movie" title="Popular Movies" list={popularMovies} />
      </div>
    </main>
  );
}
