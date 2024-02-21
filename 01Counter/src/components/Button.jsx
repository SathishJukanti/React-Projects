import React from 'react'

function Button({btnText, clickHandler}) {
//     const [counter, setCounter] = useState(0)

//   const increaseVal = () => {
//     setCounter(counter + 1)
//   }

//   const decreaseVal = () => {
//     setCounter(counter - 1)
//   }

//   let resetVal = () => {
//     setCounter(0)
//   }

  return (
    <button 
    className='text-4xl bg-slate-500 rounded-full mt-20 min-h-[100px] min-w-[200px]' onClick={clickHandler}>{btnText}</button>
  )
}

export default Button