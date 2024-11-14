import { FaPlay } from "react-icons/fa";
export default function SiteInfo() {
  return (
    <main className="mb-20">
      <div className="container flex justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-bold text-5xl mb-4">
            The Best Streaming Experience
          </h2>
          <p className="text-gray60 text-balance text-sm mb-14">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <button className="w-fit text-sm  bg-red45 text-white px-4 py-3.5 rounded-lg outline-none border-0 focus-within:border focus-within:border-black15">
            <FaPlay className="mr-2 mb-1 inline-block" /> Start Watching Now
          </button>
        </div>
      </div>
    </main>
  );
}
