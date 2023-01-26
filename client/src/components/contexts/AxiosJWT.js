import axios from 'axios'
import { useEffect } from 'react';
import useRefreshToken from '../useRefreshToken';
import useAuth from './AuthHook'


const axiosPrivate = axios.create({
    baseURL: "http://localhost:4000",
    headers: {'Content-type':'application/jon'},
    withCredentials:true
})

const AxiosJWT = () => {
    
    const refresh = useRefreshToken();
    const { auth } = useAuth();
    
    useEffect(() => {
       
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers['authorization'] ){
                    config.headers['authorization'] = `Bearer ${auth?.token}`
                }
                return config;
            }, (error) => Promise.reject(error)

        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;

                if(error?.response?.status === 400 && !prevRequest?.sent){
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest)
                }

                // Return an error
                return Promise.reject(error) 
            }
        );

        // Remove interceptors
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return axiosPrivate;

}
export default AxiosJWT