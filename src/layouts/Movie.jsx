import { FaRegClock } from "react-icons/fa";
import ShowMain from "../components/ShowMain";
import SideInfo from "../components/SideInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import generateSummary from "../utils/generateSummary";
import Cast from "../components/Cast";
export default function Movie() {
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchShowData = async () => {
      const res = await fetch(
        `https://imdb.iamidiotareyoutoo.com/search?tt=tt${id}`
      );
      const showData = await res.json();
      setShow({
        name: showData.main.originalTitleText.text,
        summary: showData.top.plot.plotText.plainText,
        image: showData.short.image,
        rating: {
          average: showData.short.aggregateRating.ratingValue,
        },
        genres: showData.short.genre,
        language: showData.top.plot.language.id,
        premiered: `${showData.top.releaseYear.year}`,
        runtime: showData.main.runtime ? showData.main.runtime.seconds : 0,
        director: showData.short.director[0].name,
        cast: showData.main.cast.edges,
      });
      setLoading(false);
    };
    fetchShowData();
  }, [id]);
  function calcRuntime(runtime) {
    const hours = Math.floor(runtime / 3600);
    const mins = Math.floor((runtime % 3600) / 60);
    return `${hours > 0 ? hours + "h" : ""} ${mins} mins`;
  }
  return loading ? (
    <Loading />
  ) : (
    <>
      <ShowMain show={show} thumbnail={show.image} />
      <main className="mb-20">
        <div className="container lg:grid lg:grid-cols-[2fr_1fr] gap-5 items-start ">
            <div>
              {show.runtime >0 && <section className="bg-black10 border border-black15 rounded-[10px] mb-5 p-[30px]">
                <h2 className="text-gray60 font-bold mb-3">Runtime</h2>
                <div className="time">
                  <FaRegClock className="mb-1 mr-2 inline-block" />
                  {calcRuntime(show.runtime)}
                </div>
              </section>}
              <section className="bg-black10 border border-black15 rounded-[10px] mb-5 p-[30px]">
                <h2 className="text-gray60 font-bold mb-3">Description</h2>
                <p>{generateSummary(show.summary, 0)}</p>
              </section>
              <section className="bg-black10 border border-black15 rounded-[10px] mb-5 p-[30px]">
                <Cast cast={show.cast} isMovie={true} />
              </section>
            </div>
            <SideInfo info={show} director={true} />
          </div>
      </main>
    </>
  );
}
