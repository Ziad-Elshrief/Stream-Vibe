import { popularShows, popularMovies } from "../data/popular";
import Popular from "./Popular";

export default function Gernes() {
  return (
    <main className="genres">
      <div className="container">
        <h2>Explore our wide variety of categories</h2>
        <p className="mb-5">
          Whether you&apos;re looking for a comedy to make you laugh, a drama to
          make you think, or a documentary to learn something new
        </p>
        <Popular type="show" title="Popular Shows" list={popularShows} />
        <Popular type="movie" title="Popular Movies" list={popularMovies} />
      </div>
    </main>
  );
}
