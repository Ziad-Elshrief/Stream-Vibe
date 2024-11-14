export default function PricingPlan({ title, description, price }) {
  return (
    <div className="bg-black10 border border-black15 rounded-[10px] p-10 shadow-md">
      <h3 className="text-[1.75rem] mb-3">{title}</h3>
      <p className="text-gray60 text-balance">{description}</p>
      <h4 className="text-3xl my-10 ">
        ${price} <span className="text-base text-gray60 ">/Month</span>
      </h4>
      <div className="flex gap-2">
        <button className=" w-fit text-sm  bg-black08 text-white px-4 py-3.5 rounded-lg outline-none border border-black15 focus-within:border-red45">
          Start Free Trial
        </button>
        <button className="w-fit text-sm  bg-red45 text-white px-4 py-3.5 rounded-lg outline-none border-0 focus-within:border focus-within:border-black15">
          Choose Plan
        </button>
      </div>
    </div>
  );
}
