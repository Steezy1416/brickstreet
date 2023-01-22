import React from 'react'

const register = () => {
  return (
    <div className='auth-container'>
        <div className='register'>
            <div className='register-form'>
            <div className=''>
                <h1>Register</h1>
            </div>
                <form>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type="text" name="name" className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="text" name="email" className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" name="passworf" className='form-control' />
                    </div>
                    <button className='form-control'>Register</button>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default register