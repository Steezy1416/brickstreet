import axios from 'axios'
import React, { useState } from 'react';
/* import {View, Image, StyleSheet} from 'react-native';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import auth from '../utils/Auth'; */

function Register() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/register', {
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
        console.log(data);
        /* try{
            const response = await axios.post("http://localhost:5000/api/register", {username, password})
            console.log(response)
        }catch(error){
            console.log(error)
        }
        */

    }

    return (
        <section className="position-relative py-4 py-xl-5">
            <div className='container'>
                <div className='row mb-5 login-area'>
                    <div class="col-md-8 col-xl-6 text-center mx-auto">

                        <h2 className='msg-pg-title'>Create Account</h2>
                        <p className="w-lg-50 msg-body">Welcome! Please register to start buying and selling your Lego sets!</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-5">
                            <div className='card-body d-flex flex-column align-items-center'>
                                <div className="bs-icon-xl bs-icon-circle bs-icon my-4"><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg></div>
                                <form className="text-center" onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                                    </div>
                                    <div className='mb-3'>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" className="form-control" />
                                    </div>
                                    <div className='mb-3'>
                                        <button type="submit" className="btn btn-moving-gradient btn-warning d-block w-100 text-dark">Register</button>
                                    </div>
                                    <p className="text-muted mb-1">Have an account?</p>
                                    <a href='/login' class="clickHere text-decoration-none text-warning">Sign In Instead </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register

