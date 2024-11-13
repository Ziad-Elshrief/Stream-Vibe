import backImage from "../assets/images/Background Images.png";
export default function Trial() {
  return (
    <main className="trial">
      <div className="container">
        <div
          className="content text-center text-md-start d-flex flex-column flex-md-row align-items-center"
          style={{ backgroundImage: `url(${backImage})` }}
        >
          <div className="text-container">
            <h4>Start your free trial today!</h4>
            <p>
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <button className="red-btn">Start a Free Trial</button>
        </div>
      </div>
    </main>
  );
}
