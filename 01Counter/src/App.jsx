import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  
  const increaseVal = () => {
    setCounter(counter + 1)
  }

  const decreaseVal = () => {
    setCounter(counter - 1)
  }

  let resetVal = () => {
    setCounter(0)
  }


  return (
    <>
      <div className='min-h-[900px] w-full bg-slate-400 m-4 rounded-xl shadow-lg'>
        <h1 className='text-6xl pt-20'>Counter App</h1>
        <h1 className='text-6xl pt-20'>{counter}</h1>
      <div>
      <button className='text-4xl bg-slate-500 rounded-full mt-20 min-h-[100px] min-w-[200px]'
      onClick={increaseVal}
      >+</button>
      <button className='text-4xl bg-slate-500 rounded-full mt-20 min-h-[100px] min-w-[200px] mr-5 ml-5'
      onClick={resetVal}
      >Reset</button>
      <button className='text-4xl bg-slate-500 rounded-full mt-20 min-h-[100px] min-w-[200px]'
      onClick={decreaseVal}
      >-</button>
      </div>
      </div>
    </>
  )
}

export default App
