export default function PricingPlan({title , description , price}) {
  return (
    <div className="plan-card">
      <h3>{title}</h3>
      <p>
        {description}
      </p>
      <h4>
        ${price} <span>/Month</span>
      </h4>
      <div className="buttons d-flex gap-2">
        <button className="black-btn">Start Free Trial</button>
        <button className="red-btn">Choose Plan</button>
      </div>
    </div>
  );
}
