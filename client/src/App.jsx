import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
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