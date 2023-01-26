
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../contexts/AuthHook";

const ProtectedAuth = () =>{
    const {auth} = useAuth();
    
    const location =useLocation();

    return (
  
        auth
            ? <Outlet />
            : <Navigate to="/"/>
    )
    
}
export default ProtectedAuth;