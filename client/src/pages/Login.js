import React, {useState} from 'react'
import useAuth from '../components/contexts/AuthHook'
//import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

const {setAuth} = useAuth();
const navigate = useNavigate();
 const [username, setUsername] = useState("")
 const [password, setPassword] = useState("")

const formhandler= async () =>{
    const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password,
        })
      });
      const data = await response.json()
      setAuth(data)
      navigate('/home')
      console.log(data);
} 

    const submit = async (e) =>{
        e.preventDefault();
        
   

       /* try{
              await axios.post("http://localhost:4000/api/login",{username:username, password:password},{
                headers: {"content-type": "application/json" },
                withCredentials: true,
              }).then((response) => {

              if(response.data){
                setAuth(response.data)
               
                navigate('/home')
              }else{
                console.log("response.data")
              }

              })

            //setAuth({username:res.data?.user.username,token:"erweri344343ieid", id:"934893fsdfsf423"})
            
        }catch(error){
            console.log("Error Found", error)
        }
        */
    }

  return (
    <div className='container-fluid'>
        <div className='login-area'>
            <div class="box col-md-4 col-sm-8">
                <div className='box-header'>
                    <h1>Login</h1>
                </div>
                <div className='box-body px-3'>
                    <form>
                        <div className='group'>
                            <input type="text"
                            name="username"
                            placeholder="username"
                            className="p-2  form-control text-center"
                            value={username}
                            onChange={(event)=>{setUsername(event.target.value)}} />
                        </div>
                        <div className='group'>
                            <input type="password" 
                            name="password" 
                            placeholder="password" 
                            className="p-2 form-control text-center"
                            value={password}
                            onChange={(event)=>{setPassword(event.target.value)}} />
                        </div>
                        <div className='group text-center'>
                            <input type="submit"
                            value="Login" onClick={formhandler} 
                            className="btn p-2 btn-primary col-md-6 text-center"
                            />
                        </div>
                    </form>
                    {/* <p className='lead'><a href='' class="nav-link">Forget Password</a></p>  */}
                   
                    <p className='lead'>Dont have an account <a href='/register' class="nav-link">Sign Up</a></p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login