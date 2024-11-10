export default function DeviceCard({ title, description, children }) {
  return (
    <div className="device-card">
      <div>
        {children}
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
}
