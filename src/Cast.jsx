import { useState } from "react";
import Unkown from "./assets/images/Unknown_person.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function Cast({ cast ,isMovie=false}) {
 const [position , setPosition] = useState(0);
  function increasePosition(){
    if(position < cast.length -3){
      setPosition(prev => prev+1);
    }
  }
  function decreasePosition(){
    if(position > 0){
      setPosition(prev => prev-1);
    }
  }
  return ( <> 
    <div className="d-flex justify-content-between align-items-center">
    <h2>Cast</h2>
    <div>
    <button className="red-btn me-2" onClick={decreasePosition}> <FaArrowLeft /> </button>
    <button className="red-btn" onClick={increasePosition}> <FaArrowRight /> </button>
    </div>
    </div>
   
    <div className="d-flex align-items-start flex-wrap">
        {cast.slice(position).map((member) => (
          <img
            key={isMovie ? member.node.name.id : member.person.id}
            src={isMovie ? member.node.name.primaryImage ? member.node.name.primaryImage.url : Unkown : member.person.image ? member.person.image.medium : Unkown}
            alt={isMovie ?member.node.name.nameText.text : member.person.name}
            title={isMovie ? member.node.name.nameText.text : member.person.name}
          />
        ))}
    </div> </>
  );
}
