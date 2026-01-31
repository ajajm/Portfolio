import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiDevpost } from "react-icons/si";


const Socials = () => {
  return (
    <div className='flex items-center  border-gray-900/5 text-[#9198a1] text-xm  justify-center gap-7'>
        <a className='hover:text-[#f0f6fc]' href='https://x.com/ajaj_dev' target='_blank'><FaTwitter /></a>
        <a className='hover:text-[#f0f6fc]' href='https://github.com/ajajm/' target='_blank'><FaGithub /></a>
        <a className='hover:text-[#f0f6fc]' href='https://www.linkedin.com/in/ajaj-dev/' target='_blank'><FaLinkedin /></a>
        <a className='hover:text-[#f0f6fc]' href='https://devpost.com/ajajm677' target='_blank'><SiDevpost /></a>
    </div>
  )
}

export default Socials
