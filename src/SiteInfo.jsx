import { FaPlay } from "react-icons/fa";
export default function SiteInfo() {
  return (
    <main className="site-info">
      <div className="container d-flex justify-content-center">
        <div className="col-10 d-flex flex-column align-items-center justify-content-center text-center">
          <h2>The Best Streaming Experience</h2>
          <p>
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <button className="red-btn">
            <FaPlay className="me-1" /> Start Watching Now
          </button>
        </div>
      </div>
    </main>
  );
}
