import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Blog from './pages/Blog'
import Services from './pages/Services'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
