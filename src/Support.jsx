import SupportPoster from "./assets/images/support.jpg";

export default function Support() {
  return (
    <main className="support">
      <div className="container d-flex flex-column flex-md-row">
        <div className="info">
          <div className="text-container">
            <h3>Welcome to our support page!</h3>
            <p>
              We&apos;re here to help you with any problems you may be having
              with our product.
            </p>
          </div>
          <img src={SupportPoster} alt="Support" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="first-box">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="First Name"
              id="first-name"
              placeholder="Enter First Name"
            />
          </div>
          <div className="last-box">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="Last Name"
              id="last-name"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="mail-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="phone-box">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="message-box">
            <label htmlFor="message" id="message-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your Message"
            ></textarea>
          </div>
          <div className="form-check py-2 d-flex align-items-center gap-2">
            <input
              className="form-check-input flex-shrink-0"
              type="checkbox"
              value=""
              id="agree"
            />
            <label className="form-check-label" htmlFor="agree">
            I agree with Terms of Use and Privacy Policy
            </label>
          </div>
          <input
            type="submit"
            value="Send Message"
            className="red-btn mt-2 m-md-0 justify-self-end"
          />
        </form>
      </div>
    </main>
  );
}
