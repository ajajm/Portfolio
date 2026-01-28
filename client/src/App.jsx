import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './components/Footer';
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className='h-screen text-[#fffff0]'>
      <LoadingBar
        color="#e769f5"
        progress={progress}
        onLoaderFinished={() => setProgress()}
      />
        <Navbar progressData={setProgress} />


        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='mailto:ajaj.dev@proton.me' element={<Contact />} />
        </Routes>

        <Footer/>
    </div>
  )
}

export default App