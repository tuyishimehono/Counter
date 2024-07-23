import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increase(){
    setCount(prevCount => prevCount + 1)
  }
  function decrease(){
    if(count>=1){
      setCount(prevCount => prevCount - 1)
    }
  }
  function reset(){
    setCount(0)
  }
  return (
    <main className='mx-auto px-40 bg-black flex flex-col place-content-center pt-10'>
      <div className='p-24 border-2 border-amber-200 shadow-xl rounded-lg'>
        <h1 className='text-white text-center text-5xl'>{count}</h1>
      </div>
      <div className='grid grid-cols-3 gap-14 pt-12'>
        <button onClick={increase} className='px-5 py-4 bg-stone-900 text-amber-200 text-xl shadow-inner rounded-lg'>Increase</button>
        <button onClick= {decrease} className='px-5 py-4 bg-stone-900 text-amber-200 text-xl shadow-inner rounded-lg'>Decrease</button>
        <button onClick= {reset} className='px-5 py-4 bg-stone-900 text-amber-200 text-xl shadow-inner rounded-lg'>Reset</button>
      </div>
    </main>
  )
}

export default App
