import React from 'react'
import { professor } from '../../dummydata'
import './professor.css'

const Prof = () => {
  return (
    <>
    <div>
        {professor.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.src} alt='' />
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.title}</p>
          </div>
        </div>
      ))}
    </div>
    </>
    
  )
}

export default Prof