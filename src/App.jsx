import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Homer from './component/Homer'
import Weather from './component/Weather'

const App = () => {
  return (
    <div className='px-2 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/lowerpart' element={<Homer />}/>
          <Route path='/weatherpart' element={<Weather />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App