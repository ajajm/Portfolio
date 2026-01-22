import React from 'react';
import { Link } from 'react-router';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className='flex relative justify-center bottom-0 items-center border-t mx-auto border-slate-900/5 w-full mt-auto'>
      <div className='flex flex-col items-center justify-center gap-3 py-10'>
        {/* logo name */}
        <Link to='/'>
          <span className='flex items-center font-bold text-x gap-2'>
            <img 
              src='/pfp.jpg' 
              alt='ajaj.dev' 
              className='w-9 h-9 object-cover rounded-full transition duration-500 blur-0 scale-100' 
            />
            Md Ajaj
          </span>
        </Link>

        {/* about contact discord */}
        <div className='flex py-2 px-5 rounded-2xl justify-between gap-8 text-white items-center'>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='https://discord.gg/mr3S7SVjMc' target='_blank'>Discord</Link>
        </div>

        {/* socials */}
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;