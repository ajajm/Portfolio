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
          <p class="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide">
            I’m MD Ajaj, a software engineer focused on building practical, production ready systems. I work on web applications, automation pipelines, and AI powered tools without unnecessary complexity.
          </p>
          <p className='mt-5  lg:mt-39'>~ Focusing towards career ✨</p>
      </div>
      <div className='mt-4 lg:mt-0'>
        <img 
          alt="Avatar" loading="lazy"  decoding="async" data-nimg="1" className="transition w-[400px] h-[400px] object-cover duration-500 mb-4 blur-0 scale-100 rounded-2xl"
          src={pfp} srcSet={pfp} /> 
        <Socials /> 
      </div> 
    </div>
  )
}

export default Hero