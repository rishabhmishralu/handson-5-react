import React from 'react'
import { useState } from 'react'


const Counter=(WrappedComponent)=>{
const Counter = () => {
 const [first, setfirst] = useState(0)
     

  const click=()=>{
  setfirst(first+5)
  }
    
  return (
    <div>
        <WrappedComponent first={first} click={click} />
       
        </div>
  )
}
return Counter
}
export default Counter;