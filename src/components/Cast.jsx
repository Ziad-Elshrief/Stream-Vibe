import { useState } from "react";
import Unkown from "../assets/images/Unknown_person.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function Cast({ cast, isMovie = false }) {
  const [position, setPosition] = useState(0);
  function increasePosition() {
    if (position < cast.length - 3) {
      setPosition((prev) => prev + 1);
    }
  }
  function decreasePosition() {
    if (position > 0) {
      setPosition((prev) => prev - 1);
    }
  }
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-gray60 font-bold text-base">Cast</h2>
        <div className="space-x-2">
          <button
            aria-label="arrow left"
            className="w-fit  bg-black08 text-gray60 p-3 outline-none border border-black15 rounded-full focus-within:border-black10"
            onClick={decreasePosition}
          >
            <FaArrowLeft className="size-5 pointer-events-none" />
          </button>
          <button
            aria-label="arrow right"
            className="w-fit  bg-black08 text-gray60 p-3 outline-none border border-black15 rounded-full focus-within:border-black10"
            onClick={increasePosition}
          >
            <FaArrowRight className="size-5 pointer-events-none" />
          </button>
        </div>
      </div>
      <div className="flex items-start flex-wrap h-[89px] overflow-hidden gap-x-[10px]">
        {cast.map((member, index) => (
          <img
            key={isMovie ? member.node.name.id : member.person.id}
            src={
              isMovie
                ? member.node.name.primaryImage
                  ? member.node.name.primaryImage.url
                  : Unkown
                : member.person.image
                ? member.person.image.medium
                : Unkown
            }
            alt={isMovie ? member.node.name.nameText.text : member.person.name}
            title={
              isMovie ? member.node.name.nameText.text : member.person.name
            }
            className={`rounded-[10px] object-cover object-top h-[89px] w-[87.5px] ${
              index >= position ? "" : "hidden"
            }`}
          />
        ))}
      </div>
    </>
  );
}
