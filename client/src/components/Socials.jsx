import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className='flex items-center  border-gray-900/5 text-[#9198a1] text-xm  justify-center gap-7'>
        <a className='hover:text-white' href='https://x.com/not_ajaj/' target='_blank'><FaTwitter /></a>
        <a className='hover:text-white' href='https://github.com/ajajm/' target='_blank'><FaGithub /></a>
        <a className='hover:text-white' href='https://www.linkedin.com/in/ajaj-dev/' target='_blank'><FaLinkedin /></a>
    </div>
  )
}

export default Socials