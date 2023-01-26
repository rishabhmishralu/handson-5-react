import React from 'react'

import Counter from './Counter'
const Click = (props) => {
    const {first, click} = props
  
  
  return (
    <div>
<br />
<br />
   <div className='hover'>
    {first} <br />
    <button onClick={click} className="button">clickhere</button>
   </div>

    </div>
  )
}

export default Counter(Click)