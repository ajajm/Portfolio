import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './components/Footer';
import { useRef, useEffect } from 'react' 
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const loadingBarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleProgress = () => {
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart(99.9);
      setTimeout(() => {
        loadingBarRef.current.complete();
      }, 10);
    }
  };

  return (
    <div className='h-screen text-[#fffff0]'>
      <LoadingBar
        ref={loadingBarRef}
        color="#e769f5"
        height={3}
        md:height={4}
        shadow={true}
        loaderSpeed={500}
        transitionTime={200}
      />
        <Navbar progressData={handleProgress} />


        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer progressData={handleProgress}/>
    </div>
  )
}

export default App