import { useEffect } from 'react'
import { useState, useCallback, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const[numAllowed, setNumAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed) str += '0123456789'
    if (charAllowed) str += '~!@#$%^&*()_{}[]/';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])



  return (
    <>
      <div className='w-full h-screen bg-slate-500 flex flex-wrap justify-center'>
        <div className='h-[400px] min-w-[1200px] bg-cyan-200 mt-24 shadow-2xl rounded-lg'>
          <h1 className='text-2xl text-center mt-8'>Password Generator</h1>
          <input
          type="text"
          value={password}
          className='h-[100px] w-[800px] mt-20 ml-20 rounded-lg shadow-lg'
          placeholder='Password'
          readOnly
          ref={passwordRef} 
          />
          <button
          className='py-10 px-14 bg-orange-300 rounded-lg shadow-lg'
          onClick={copyPasswordToClipboard}>Copy
          </button>
          <div className='flex my-10 mx-20'>
            <div className='  flex'>
              <input 
              type="range" 
              min={8}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label className='ml-4'>
                Length: {length}
              </label>
            </div>
            <div className='className="flex items-center ml-8'>
              <input type="checkbox" 
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
              />
              <label className='ml-2'>Numbers</label>
            </div>
            <div className='className="flex items-center ml-8'>
              <input type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
              />
              <label className='ml-2'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
