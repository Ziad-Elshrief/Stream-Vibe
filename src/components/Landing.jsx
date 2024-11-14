import image1 from "../assets/images/Image Container.png";
import image2 from "../assets/images/Image Container-1.png";
import image3 from "../assets/images/Image Container-2.png";
import image4 from "../assets/images/Image Container-3.png";
export default function Landing({ children }) {
  return (
    <div className="landing">
      <div
        className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-3/4 before:z-10 before:bg-gradient-to-b  before:from-transparent  before:from-10%  before:to-black08  before:to-100%
after:absolute after:top-0 after:left-0 after:w-full after:h-3/4 after:z-10 after:bg-gradient-to-t  after:from-transparent  after:from-10%  after:to-black08  after:to-100%"
      >
        {children}
        <img src={image1} alt="image-1" className="w-full" />
        <img src={image2} alt="image-2" className="w-full" />
        <img src={image3} alt="image-3" className="w-full" />
        <img src={image4} alt="image-4" className="w-full" />
      </div>
    </div>
  );
}

/** bg-gradient-to-b from-transparent from-10% to-black08 to-100%
    background-image: linear-gradient(0deg, transparent 10%, var(--black-08) 100%);
    background-size: contain; */
