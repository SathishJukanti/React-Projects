import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState('#212121')


  return (
    <>
      <div 
      className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <Button
            clickHandler={() => setColor('green')}
            Color='Green'
            />
            
            <Button
            clickHandler={() => setColor('pink')}
            Color='Pink'
            />

            <Button
            clickHandler={() => setColor('orange')}
            Color='Orange'
            />

            <Button
            clickHandler={() => setColor('blue')}
            Color='Blue'
            />

            <Button
            clickHandler={() => setColor('brown')}
            Color='Brown'
            />

            <Button
            clickHandler={() => setColor('red')}
            Color='Red'
            />

          </div>
        </div>
      </div>
    </>
  )
}

export default App
