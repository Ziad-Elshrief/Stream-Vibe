import SupportPoster from "../assets/images/support.jpg";

export default function Support() {
  return (
    <main className="mb-20">
      <div className="container flex flex-col md:flex-row gap-12">
        <div className="flex-[1_1_0%]">
          <div className="mb-10">
            <h3 className="text-3xl mb-3 font-medium">
              Welcome to our support page!
            </h3>
            <p className="text-gray60 text-balance">
              We&apos;re here to help you with any problems you may be having
              with our product.
            </p>
          </div>
          <img
            src={SupportPoster}
            alt="Support"
            className="w-full rounded-md border-[3px] border-black15"
          />
        </div>
        <form
          className="flex-[2_1_0%] bg-black06 border border-black15 p-10 rounded-xl md:grid md:grid-cols-2 md:gap-x-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="first-box">
            <label htmlFor="first-name" className="mb-3 block">
              First Name
            </label>
            <input
              type="text"
              name="First Name"
              id="first-name"
              placeholder="Enter First Name"
              className="mb-10 w-full bg-black08 text-gray60 text-sm p-4 border border-black15 rounded-md caret-red45 focus:border-red45  focus:outline-none"
            />
          </div>
          <div className="last-box">
            <label htmlFor="last-name" className="mb-3 block">
              Last Name
            </label>
            <input
              type="text"
              name="Last Name"
              id="last-name"
              placeholder="Enter Last Name"
              className="mb-10 w-full bg-black08 text-gray60 text-sm p-4 border border-black15 rounded-md caret-red45 focus:border-red45  focus:outline-none"
            />
          </div>
          <div className="mail-box">
            <label htmlFor="email" className="mb-3 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              className="mb-10 w-full bg-black08 text-gray60 text-sm p-4 border border-black15 rounded-md caret-red45 focus:border-red45  focus:outline-none"
            />
          </div>
          <div className="phone-box">
            <label htmlFor="phone" className="mb-3 block">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter Phone Number"
              className="mb-10 w-full bg-black08 text-gray60 text-sm p-4 border border-black15 rounded-md caret-red45 focus:border-red45  focus:outline-none"
            />
          </div>
          <div className="message-box md:col-span-2">
            <label htmlFor="message" className="mb-3 block">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your Message"
              className="resize-none min-h-[110px] mb-10 w-full bg-black08 text-gray60 text-sm p-4 border border-black15 rounded-md caret-red45 focus:border-red45 focus:outline-none"
            ></textarea>
          </div>
          <div className="py-2 flex items-center gap-2 md:justify-center">
            <input
              className="flex-shrink-0  relative size-4 appearance-none bg-transparent border border-black15 cursor-pointer rounded hover:border-red50 focus:border-red50 checked:bg-no-repeat checked:bg-center checked:border-red45  checked:bg-red45 checked:after:absolute checked:after:-inset-0 checked:after:translate-x-[2px] checked:after:-translate-y-[2px] checked:after:content-['✓'] checked:after:text-xs "
              type="checkbox"
              value=""
              id="agree"
            />
            <label className="text-balance" htmlFor="agree">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>
          <input
            type="submit"
            value="Send Message"
            className="w-fit text-sm bg-red45 text-white px-4 py-3.5 rounded-lg outline-none border-0 focus-within:border focus-within:border-black15 mt-2 md:mt-0 justify-self-end self-center"
          />
        </form>
      </div>
    </main>
  );
}
