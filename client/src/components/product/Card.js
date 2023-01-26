import React from 'react'

const Card = (prop) => {
  return (
    <div className='card'>
        <img src={`resources/uploads/${prop.path}` }/>
    </div>
  )
}


export default Card