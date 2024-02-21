import React from 'react'

function Button({btnText, clickHandler}) {

  return (
    <button 
    className='text-4xl bg-slate-500 rounded-full mt-20 min-h-[100px] min-w-[200px] m-2' onClick={clickHandler}>{btnText}</button>
  )
}

export default Button