import React from 'react'
import Socials from '../components/Socials'

const Home = () => {
  return (
    <div className='block relative lg:flex max-w-5xl mx-auto mt-10 md:mt-20 px-8'>
      <div className='mr-4 flex flex-col  w-7xl'>
        <h1 className='mb-8 text-5xl font-extrabold '>Written by someone <br></br>
          <span className='text-[#06b5d4]'> who ships.</span>
        </h1>
          <p className='font-sans text-zinc-400'>
            I’m MD Ajaj, a software engineer focused on turning ideas into working systems. I build web applications, automation pipelines, and AI-powered tools without unnecessary complexity.
          </p>
          <h3 className='absolute bottom-5'>~ Focusing towards career ✨</h3>
      </div>
      <div>
        <img className='rounded-xl mb-4' 
          src="public/pfp.jpg" alt="He's a software engineer" srcset="" /> 
        <Socials /> 
      </div> 
    </div>
  )
}

export default Home