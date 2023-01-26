import axios from "axios";
import useAuth from "../contexts/AuthHook"


const useRefreshToken = () =>{

    const { auth, setAuth} = useAuth();

    const refresh = async () => {
        const response = await axios.get("http://localhost:4100/api/refresh", {
            withCredentials:true
        });
        console.log(response.data)

        setAuth( { id:response.data.id, username:response.data.username, token:response.data.token}
        )
       console.log(auth?.token)
        return response.data.token
    }

    return refresh;

}

export default useRefreshToken;