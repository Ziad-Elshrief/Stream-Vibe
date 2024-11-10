import PopularShows from "./PopularShows"
import PopularMovies from "./PopularMovies"

export default function MoviesShows() {
  
  return (
    <main>
      <div className="container">
          <h1 className="red-btn mb-3">Shows </h1>
          <PopularShows />
          <h1 className="red-btn mb-3">Movies </h1>
          <PopularMovies />
      </div>
    </main>
  );
}
