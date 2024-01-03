import React from 'react'
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>   
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Conatct' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App