import React from 'react';
//import "./Auth.css"

const auth = () => {
  return (
    <div className='auth-container'>
      
        <div className='login'>
           
            <div className='login-form'>
            <div className=''>
                <h1>Login</h1>
            </div>
        <form>
            <div className='form-group'>
                <label>Email</label>
                <input type="text" name="email" className='form-control' />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="password" name="password" className='form-control' />
            </div>
            <button type="submit">Login</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default auth;