import { Link } from "react-router-dom"
import NavBar from "./NavBar";

function NotFoundPage(){
    return(
        <>
        <NavBar />

        <h1 className="text-center text-9xl" 
        >Page Not Found</h1>
        
        <Link to={'/'}>
        <button>Go Back Home</button></Link>
        
        </>
    )
}

export default NotFoundPage;