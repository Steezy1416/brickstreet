// NEED CODE TO RENDER TO HOMEPAGE

import React from 'react'
import "./styles.css"

const Logout = () => {
  return (
    <div className='auth-container'>
      
        <div className='logout'>
           
            <div className='logout-form'>
            <div className=''>
                <h1>Logout</h1>
            </div>
        <form>
            <button type="submit">Logout</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Logout