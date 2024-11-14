import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-black06 pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-12 gap-y-4">
          <ul className="col-span-6 md:col-span-4 lg:col-span-2 space-y-2.5">
            <li className="link">
              <Link className="text-lg font-medium" to={"/"}>Home</Link>
            </li>
            <li className="text-gray60">Categories</li>
            <li className="text-gray60">Devices</li>
            <li className="text-gray60">Pricing</li>
            <li className="text-gray60">FAQ</li>
          </ul>
          <ul className="col-span-6 md:col-span-4 lg:col-span-2 space-y-2.5">
            <li><Link className="text-lg font-medium" to={"/movies-shows"}>Shows</Link></li>
            <li className="text-gray60">Genres</li>
            <li className="text-gray60">Trending</li>
            <li className="text-gray60">New Release</li>
            <li className="text-gray60">Popular</li>
          </ul>
          <ul className="col-span-6 md:col-span-4 lg:col-span-2 space-y-2.5">
            <li><Link className="text-lg font-medium" to={"/movies-shows"}>Movies</Link></li>
            <li className="text-gray60">Genres</li>
            <li className="text-gray60">Trending</li>
            <li className="text-gray60">New Release</li>
            <li className="text-gray60">Popular</li>
          </ul>
          <ul className="col-span-6 md:col-span-4 lg:col-span-2 space-y-2.5">
            <li>
              <Link className="text-lg font-medium" to={"/support"}>Support</Link>{" "}
            </li>
            <li className="text-gray60">Contact us</li>
          </ul>
          <ul className="col-span-6 md:col-span-4 lg:col-span-2 space-y-2.5">
            <li>
              <Link className="text-lg font-medium" to={"/subscription"}>Subscription</Link>
            </li>
            <li className="text-gray60" >Plans</li>
            <li className="text-gray60">Features</li>
          </ul>
          <div className="col-span-6 md:col-span-4 lg:col-span-2 space-y-2.5">
            <h5 className="text-lg font-medium">Social Media</h5>
            <div className="flex gap-x-2">
              <div className="rounded-md border border-black15 bg-black10 p-2 cursor-pointer">
                <FaFacebook className="size-5" />
              </div>
              <div className="rounded-md border border-black15 bg-black10 p-2 cursor-pointer">
                <FaXTwitter className="size-5" />
              </div>
              <div className="rounded-md border border-black15 bg-black10 p-2 cursor-pointer">
                <FaLinkedin className="size-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-5 text-gray60 border-t border-black15  md:flex md:justify-between">
          <p className="mb-3">@2023 streamvib, All Rights Reserved</p>
          <ul className="flex space-x-4 ">
            <li className="pr-4 border-r border-black15">Terms of Use</li>
            <li className="pr-4 border-r border-black15">Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
