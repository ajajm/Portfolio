import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='h-screen text-[#fffff0]'>
        <Navbar/>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer/>
    </div>
  )
}

export default App