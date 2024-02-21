import { useState } from 'react'
import './App.css'
import Button from './components/Button'

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
      <Button btnText='+' clickHandler={increaseVal}/>
      <Button btnText='Reset' clickHandler={resetVal} />
      <Button btnText='-' clickHandler={decreaseVal}/>
      </div>
      </div>
    </>
  )
}

export default App
