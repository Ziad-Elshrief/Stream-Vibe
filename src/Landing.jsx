import image1 from "./assets/images/Image Container.png";
import image2 from "./assets/images/Image Container-1.png";
import image3 from "./assets/images/Image Container-2.png";
import image4 from "./assets/images/Image Container-3.png";
export default function Landing({children}) {
  return (
    <div className="landing">
      <div className="images">
        {children}
        <img src={image1} alt="image-1" />
        <img src={image2} alt="image-2" />
        <img src={image3} alt="image-3" />
        <img src={image4} alt="image-4" />
      </div>
    </div>
  );
}
