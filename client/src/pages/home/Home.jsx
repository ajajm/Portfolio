import React from 'react'
import Socials from '../../components/Socials'

const Home = () => {
  return (
    <div className='"block relative lg:flex max-w-5xl mx-auto mt-10 md:mt-20 px-8"'>
      <div>
        <h1 className='mb-8 text-5xl font-extrabold '>Written by someone <br></br>
          <span className='text-[#06b5d4]'> who ships.</span>
        </h1>
          <p className='font-sans font-medium text-zinc-400'>
            I’m MD Ajaj, a software engineer focused on turning ideas into working systems. I build web applications, automation pipelines, and AI-powered tools without unnecessary complexity.
          </p>
          <p className='mt-5 lg:mt-20'>~ Focusing towards career ✨</p>
      </div>
      <div className='mt-4 lg:mt-0'>
        <img 
          alt="Avatar" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" class="transition duration-500 mb-4 blur-0 scale-100 rounded-2xl"
          src="public/pfp.jpg" srcset="public/pfp.jpg" /> 
        <Socials /> 
      </div> 
    </div>
  )
}

export default Home