import axios from 'axios'
import React, { useState } from 'react';
/* import {View, Image, StyleSheet} from 'react-native';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import auth from '../utils/Auth'; */

function Register() {
    
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) =>{
      e.preventDefault();
      
      try{
          const response = axios.post("http://localhost:4000/api/register", {username, password})
          console.log(response)
      }catch(error){
          console.log(error)
      }
     

  }

  return (
    <div className='container-fluid'>
        <div className='login-area'>
            <div class="box col-md-4 col-sm-8">
                <div className='box-header'>
                    <h1>Create Account</h1>
                </div>
                <div className='box-body px-3'>
                    <form onSubmit={handleSubmit}>
                        <div className='group'>
                            <input type="text" name="username" placeholder="username" value={username} onChange = {(e)=>setUsername(e.target.value)} className="p-2  form-control text-center" />
                        </div>
                        <div className='group'>
                            <input type="password" value={password} onChange = {(e)=>setPassword(e.target.value)} name="password" placeholder="password" className="p-2 form-control text-center" />
                        </div>
                        <div className='group text-center'>
                            <button type="submit"  className="btn p-2 btn-primary col-md-6 text-center">Register</button>
                        </div>
                    </form>
                    

                    <p className='lead'>Have an account <a href='/' class="nav-link">Sign In </a></p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register

  