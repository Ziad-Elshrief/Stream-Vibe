import { Link } from "react-router-dom";

export default function Popular({list,type,title}){
  
    return (
       <>
         <h2 className="mb-3">{title}</h2>
        <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-sm-start mb-5">
          {list.map((item) => (
            <div
              className="movies-shows-item d-flex flex-column align-items-center justify-content-between"
              key={item.id}
            >
              <Link to={`/${type}/${item.id}`}>
                <img src={item.image} alt={item.name} />
              </Link>
              <Link to={`/${type}/${item.id}`}>
                <h4 className="mt-3 p-2 rounded-pill text-center">
                  {item.name}
                </h4>
              </Link>
            </div>
          ))}
        </div>
       </>
    )
}