import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-links row row-gap-4 justify-content-start">
          <ul className="col-6 col-md-4 col-lg">
            <li className="link">
              <Link to={"/"}>Home</Link>
            </li>
            <li>Categories</li>
            <li>Devices</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
          <ul className="col-6 col-md-4 col-lg">
            <li><Link to={"/movies-shows"}>Shows</Link></li>
            <li>Genres</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
          </ul>
          <ul className="col-6 col-md-4 col-lg">
            <li><Link to={"/movies-shows"}>Movies</Link></li>
            <li>Genres</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
          </ul>
          <ul className="col-6 col-md-4 col-lg">
            <li>
              <Link to={"/support"}>Support</Link>{" "}
            </li>
            <li>Contact us</li>
          </ul>
          <ul className="col-6 col-md-4 col-lg">
            <li>
              <Link to={"/subscription"}>Subscription</Link>
            </li>
            <li>Plans</li>
            <li>Features</li>
          </ul>
          <div className="col-6 col-md-4 col-lg">
            <h5>Social Media</h5>
            <div className="socials">
              <div className="icon-wrapper">
                <FaFacebook />
              </div>
              <div className="icon-wrapper">
                <FaXTwitter />
              </div>
              <div className="icon-wrapper">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="info d-md-flex justify-content-between">
          <p className="mb-3">@2023 streamvib, All Rights Reserved</p>
          <ul className="d-flex">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
