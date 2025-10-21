
import { useState } from 'react'
import './App.css'

function App() {

  const [dark,setDark] = useState(false)

  const handletheme = () => {
    setDark(!dark)
  }
  
  return (
    <>
      <div
      style={{
        height:"100vh",
        background : dark ? "black" : "white"
      }}
      className='d-flex flex-column align-items-center justify-content-center'
      >
        <h1 style={{color: dark ? "white" : "black"}}>Hello</h1>
        <button className='btn' style={{color: dark ? "white" : "black"}} onClick={handletheme}>Click Here</button>
      </div>
    </>
  )
}

export default App
