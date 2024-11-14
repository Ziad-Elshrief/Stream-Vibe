import backImage from "../assets/images/Background Images.png";
export default function Trial() {
  return (
    <main className="mb-20">
      <div className="container">
        <div
          className="text-center md:text-start shadow-md py-[50px] px-[30px] gap-[50px] flex flex-col items-center md:flex-row md:gap-[100px] md:py-20 md:px-[60px] rounded-xl border border-black15 bg-auto bg-right-top"
          style={{ backgroundImage: `url(${backImage})` }}
        >
          <div>
            <h4 className="text-2xl mb-2">Start your free trial today!</h4>
            <p className="text-gray60 text-balance">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <button className="flex-shrink-0 w-fit text-sm  bg-red45 text-white px-4 py-3.5 rounded-lg outline-none border-0 focus-within:border focus-within:border-black15">
            Start a Free Trial
          </button>
        </div>
      </div>
    </main>
  );
}
