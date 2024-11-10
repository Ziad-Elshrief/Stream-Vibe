import { ClipLoader } from "react-spinners";

export default function Loading(){
    return (
        <div className="d-flex align-items-center justify-content-center my-5">
            <ClipLoader
            color="#e50000"
            size={200}
            />
        </div>
    )
}