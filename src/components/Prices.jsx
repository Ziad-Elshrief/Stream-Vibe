import PricingPlan from "./PricingPlan";

export default function Prices() {
  return (
    <main className="mb-20">
      <div className="container">
        <h2 className="font-bold text-[1.75rem] mb-4">
          Choose the plan that&apos;s right for you
        </h2>
        <p className="text-gray60 text-balance">
          Join StreamVibe and select from our flexible subscription options
          tailored to suit your viewing preferences. Get ready for non-stop
          entertainment!
        </p>
        <div className="mt-[60px] grid gap-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          <PricingPlan
            title="Basic Plan"
            description={
              "Enjoy an extensive library of movies and shows, featuring a range of content."
            }
            price={"9.99"}
          />
          <PricingPlan
            title="Standard Plan"
            description={
              " Access to a wider selection of movies and shows, including most new releases and exclusive content."
            }
            price={"12.99"}
          />
          <PricingPlan
            title="Premium Plan"
            description={
              "Access to a widest selection of movies and shows, including all new releases and Offline Viewing."
            }
            price={"14.99"}
          />
        </div>
      </div>
    </main>
  );
}
