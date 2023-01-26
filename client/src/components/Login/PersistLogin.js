import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "../contexts/AuthHook";

const PersistLogin  = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
     
        const verifyRefreshToken = async () => {
            try {
                await refresh;
                
            } catch (err) {
                
                console.log("Error occured")
            }
            finally {
                setIsLoading(false)
            }
        }

        !auth?.token ? verifyRefreshToken() : setIsLoading(false)

    }, [])

   useEffect( () => {
    console.log(`isLoading ${isLoading}`)
    console.log(`aT ${auth?.token}`)
   }, [isLoading])

    return (
        <>
        { isLoading
            ? <p>Loading...</p>
            : <Outlet />
        }
        </>
    )
}
export default PersistLogin;