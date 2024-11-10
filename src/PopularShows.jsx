import { Link } from "react-router-dom";

export default function popularShows(){
    const popularList = [
        {
          name: "The Walking Dead",
          id: 73,
          image:
            "https://static.tvmaze.com/uploads/images/medium_portrait/424/1061900.jpg",
        },
        {
          name: "Breaking Bad",
          id: 169,
          image:
            "https://static.tvmaze.com/uploads/images/medium_portrait/501/1253519.jpg",
        },
        {
          name: "The Office",
          id: 526,
          image:
            "https://static.tvmaze.com/uploads/images/medium_portrait/481/1204342.jpg",
        },
        {
          name: "Game of Thrones",
          id: 82,
          image:
            "https://static.tvmaze.com/uploads/images/medium_portrait/498/1245274.jpg",
        },
        {
          name: "The Sopranos",
          id: 527,
          image:
            "https://static.tvmaze.com/uploads/images/medium_portrait/4/11341.jpg",
        },
      ];
    return (
       <>
         <h2 className="mb-3">Popular Shows</h2>
        <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-sm-start mb-5">
          {popularList.map((show) => (
            <div
              className="movies-shows-item d-flex flex-column align-items-center justify-content-between"
              key={show.id}
            >
              <Link to={`/show/${show.id}`}>
                <img src={show.image} alt={show.name} />
              </Link>
              <Link to={`/show/${show.id}`}>
                <h4 className="mt-3 p-2 rounded-pill text-center">
                  {show.name}
                </h4>
              </Link>
            </div>
          ))}
        </div>
       </>
    )
}