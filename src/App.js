import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />  
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-blogs" element={<>Create Blogs</>} />
       </Routes>
    </BrowserRouter>
  )
}

export default App