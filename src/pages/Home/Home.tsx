import { Link } from "react-router-dom";

export const Home=()=>{
    return(
        <div className="flex items-center gap-4">
        <Link className="rounded btn btn-info text-white" to="/shop">Go to shop page</Link>
        <Link className="rounded btn btn-error text-white" to="/dashboard">Dashboard</Link>

        </div>
    );
}