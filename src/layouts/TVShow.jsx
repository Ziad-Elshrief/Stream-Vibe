import ShowMain from "../components/ShowMain";
import SideInfo from "../components/SideInfo";
import SeasonCard from "../components/SeasonCard";
import Loading from "../components/Loading";
import {useParams } from "react-router-dom";
import generateSummary from "../utils/generateSummary";
import { useEffect, useState } from "react";
import Cast from "../components/Cast";
export default function TVShow() {
  const [show, setShow] = useState({});
  const [loading ,setLoading] =useState(true);
  const { id } = useParams();
  const seasons= loading? [] :Array.from('s'.repeat(show["_embedded"].episodes[show["_embedded"].episodes.length -1].season));

  useEffect(() => {
    const fetchShowData = async () => {
      const res = await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast`);
      const showData = await res.json();
      setShow(showData);
      setLoading(false);
    };
    fetchShowData();
  }, [id]);
  return ( 
    (loading ? <Loading /> : <>
      <ShowMain show={show} thumbnail={show["_embedded"].episodes[0].image.original} />
      <main className="show-details">
        <div className="container">
          <div className="row align-items-start">
            <div className="main-info col-lg-8">
              <section className="seasons-eps show-section">
                <h2>Seasons and Episodes</h2>
                {seasons.map((season,index)=><SeasonCard key={index} index={index+1} eps={show["_embedded"].episodes}/>)}     
              </section>
              <section className="description show-section">
                <h2>Description</h2>
                  <p>{generateSummary(show.summary, 0)}</p>
              </section>
              <section className="show-section cast">
                <Cast cast={show["_embedded"].cast} />
              </section>
            </div>
            <SideInfo info={show} director={false} />
          </div>
        </div>
      </main>
    </>)
  );
}
