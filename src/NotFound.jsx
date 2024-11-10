import Landing from "./Landing";
import { TbError404 } from "react-icons/tb";
export default function Home() {
  return (
    <>
      <Landing>
        <div id="logo">
          <TbError404
            className="d-block notFound"
          />
         <h2>Page Not Found</h2>
        </div>
      </Landing>
      <div className="container text-center mb-5 fw-bolc">
        
      </div>
    </>
  );
}
