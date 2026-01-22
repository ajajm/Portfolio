import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className='flex p-8 text-xs justify-center w-full'>
      <div className='flex border-2 border-solid border-[#36363b] py-2 px-5 rounded-2xl justify-between gap-12 text-white bg-[#262629] items-center'>
        <Link to='/'>
          <span className='flex items-center font-bold gap-2'>
            <img 
              src='/pfp.jpg' 
              alt='ajaj.dev' 
              className='w-9 h-9 object-cover rounded-full transition duration-500  blur-0 scale-100 ' 
            />
            Ajaj
          </span>
        </Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='https://discord.gg/mr3S7SVjMc' target='_blank'>Discord</Link>
      </div>
    </div>
  );
};

export default Navbar;