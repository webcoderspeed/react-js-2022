import React from 'react'
import Navbar from './components/Navbar/Navbar'
import BlogList from './components/BlogList/BlogList'

const App = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <BlogList />
    </div>
  )
}

export default App