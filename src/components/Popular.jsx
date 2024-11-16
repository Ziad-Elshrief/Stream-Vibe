import { Link } from "react-router-dom";

export default function Popular({ list, type, title }) {
  return (
    <>
      <h2 className="font-bold text-[1.75rem] mb-4">{title}</h2>
      <div className="flex gap-4 flex-wrap justify-center sm:justify-start mb-10">
        {list.map((item) => (
          <div
            className="rounded-[10px] bg-black10 border border-black15 w-[200px] p-4 flex flex-col items-center justify-between"
            key={item.id}
          >
            <Link to={`/${type}/${item.id}`}>
              <img src={item.image} alt={item.name} className="w-[120px]" />
            </Link>
            <Link to={`/${type}/${item.id}`}>
              <h3 className="mt-4 px-3 py-2 rounded-full text-center text-wrap text-gray60 bg-black08 border border-black15">
                {item.name}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
