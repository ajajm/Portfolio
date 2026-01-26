import React from 'react'
import Socials from '../components/Socials'
import pfp from '../assets/pfp.jpg'

const Hero = () => {
  return (
    <div className='block relative lg:flex max-w-5xl mx-auto mt-10 md:mt-20 px-8'>
      <div>
        <h1 className='mb-8 text-3xl md:text-5xl font-extrabold '>Written by someone <br></br>
          <span className="bg-linear-to-r from-[#e769f5]  to-[#fc79bd] inline-block text-transparent bg-clip-text font-extrabold"> who ships.</span>
        </h1>
          <p className='font-light text-sm md:text-base text-[#9198a1]'>
            I’m MD Ajaj, a software engineer focused on turning ideas into working systems. I build web applications, automation pipelines, and AI-powered tools without unnecessary complexity.
          </p>
          <p className='mt-5 lg:mt-22'>~ Focusing towards career ✨</p>
      </div>
      <div className='mt-4 lg:mt-0'>
        <img 
          alt="Avatar" loading="lazy" width="700" height="700" decoding="async" data-nimg="1" className="transition duration-500 mb-4 blur-0 scale-100 rounded-2xl"
          src={pfp} srcSet={pfp} /> 
        <Socials /> 
      </div> 
    </div>
  )
}

export default Hero