import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [value, setValue] = useState("")

  const data = ["Pizza", "Piment", "Café", "Cacao", "Champagne", "Patte"]

  function handleChange(event) {
    setValue(event.target.value)
  }

  return (
    <>

      <header className=' w-full h-32 flex justify-center items-center bg-black/90 '><h1 className=' uppercase text-2xl text-white'>Search Bar</h1></header>

      <section className=' flex w-full h-14 justify-center items-center gap-10' >
        <input type="search" value={value} onChange={handleChange}  className=' w-96 h-12 border border-black' />


        <button type='button' className=' w-56 h-12 flex justify-center items-center bg-black text-white '>Search</button>

      </section>

      <ul className='text-green-900'>{value && data.filter((element) => { return (element.includes(value)) }).map((element, index) => {
        return <li className=' w-full h-14 flex justify-center items-center' key={index}>{element}</li>
      })}</ul>
    </>
  )
}


export default App
