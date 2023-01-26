import React from 'react'
import Counter from './Counter'

const Hover = (props) => {
    const {first,click} =props

   
  return (
    <div>


     <div className='hover'>

    {first} <br />
    <button onMouseOver={click} className="button">hover</button>
   </div>


    </div>
  )
}

export default Counter( Hover)