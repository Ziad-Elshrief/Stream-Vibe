import { Link } from "react-router-dom";

export default function popularMovies(){
    const popularList = [
        {
          name: "Fight Club (1999)",
          id: "0137523",
          image:
            "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "The Matrix (1999)",
          id: "0133093",
          image:
            "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "Interstellar (2014)",
          id: "0816692",
          image:
            "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "The Godfather (1972)",
          id: "0068646",
          image:
            "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
        },
        {
          name: "12 Angry Men (1957)",
          id: "0050083",
          image:
            "https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_.jpg",
        },
      ];
    return (
       <>
         <h2 className="mb-3">Popular Movies</h2>
        <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-sm-start mb-5">
          {popularList.map((movie) => (
            <div
              className="movies-shows-item d-flex flex-column align-items-center justify-content-between"
              key={movie.id}
            >
              <Link to={`/movie/${movie.id}`}>
                <img src={movie.image} alt={movie.name} />
              </Link>
              <Link to={`/movie/${movie.id}`}>
                <h4 className="mt-3 p-2 rounded-pill text-center">
                  {movie.name}
                </h4>
              </Link>
            </div>
          ))}
        </div>
       </>
    )
}