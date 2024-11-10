import PricingPlan from "./PricingPlan";

export default function Prices() {
    return (
      <main className="prices">
      <div className="container">
        <h2>Choose the plan that&apos;s right for you</h2>
        <p>
          Join StreamVibe and select from our flexible subscription options
          tailored to suit your viewing preferences. Get ready for non-stop
          entertainment!
        </p>
        <div className="plans three-grid">
          < PricingPlan title="Basic Plan" description={"Enjoy an extensive library of movies and shows, featuring a range of content."} price={"9.99"} />
          < PricingPlan title="Standard Plan" description={" Access to a wider selection of movies and shows, including most new releases and exclusive content."} price={"12.99"} />
          < PricingPlan title="Premium Plan" description={"Access to a widest selection of movies and shows, including all new releases and Offline Viewing."} price={"14.99"} />
        </div>
      </div>
    </main>
    );
  }