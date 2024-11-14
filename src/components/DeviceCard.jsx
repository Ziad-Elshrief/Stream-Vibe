export default function DeviceCard({ title, description, children }) {
  return (
    <div className="p-10 shadow-md border border-black15 rounded-[10px] bg-black06 bg-gradient-65 from-80% from-transparent to-[120%] to-redGrad">
      <div className="flex items-center">
        {children}
        <h4 className="text-xl">{title}</h4>
      </div>
      <p className="text-gray60 mt-6">{description}</p>
    </div>
  );
}
