import React from 'react'

function Button({Color, clickHandler}) {
  return (
   <button
   className='outline-none px-12 py-6 rounded-full text-white shadow-lg'
   style={{backgroundColor: Color}}
   onClick={clickHandler}
   >
  {Color}
   </button> 
  )
}

export default Button