import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center my-12">
      <ClipLoader color="#e50000" size={200} />
    </div>
  );
}
