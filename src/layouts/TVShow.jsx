import ShowMain from "../components/ShowMain";
import SideInfo from "../components/SideInfo";
import SeasonCard from "../components/SeasonCard";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import generateSummary from "../utils/generateSummary";
import { useEffect, useState } from "react";
import Cast from "../components/Cast";
export default function TVShow() {
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const seasons = loading
    ? []
    : Array.from(
        "s".repeat(
          show["_embedded"].episodes[show["_embedded"].episodes.length - 1]
            .season
        )
      );

  useEffect(() => {
    const fetchShowData = async () => {
      const res = await fetch(
        `https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast`
      );
      const showData = await res.json();
      setShow(showData);
      setLoading(false);
    };
    fetchShowData();
  }, [id]);
  return loading ? (
    <Loading />
  ) : (
    <>
      <ShowMain
        show={show}
        thumbnail={show["_embedded"].episodes[0].image.original}
      />
      <main className="mb-20">
        <div className="container lg:grid lg:grid-cols-[2fr_1fr] gap-5 items-start">
            <div>
              <section className="bg-black10 border border-black15 rounded-[10px] mb-5 p-[30px]">
                <h2 className="text-xl mb-[30px] font-bold">
                  Seasons and Episodes
                </h2>
                {seasons.map((season, index) => (
                  <SeasonCard
                    key={index}
                    index={index + 1}
                    eps={show["_embedded"].episodes}
                  />
                ))}
              </section>
              <section className="bg-black10 border border-black15 rounded-[10px] mb-5 p-[30px]">
                <h2 className="text-gray60 font-bold mb-3">Description</h2>
                <p>{generateSummary(show.summary, 0)}</p>
              </section>
              <section className="bg-black10 border border-black15 rounded-[10px] mb-5 p-[30px]">
                <Cast cast={show["_embedded"].cast} />
              </section>
            </div>
            <SideInfo info={show} director={false} />
          </div>
      </main>
    </>
  );
}
