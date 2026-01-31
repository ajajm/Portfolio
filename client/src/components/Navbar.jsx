import React from 'react';
import { Link } from 'react-router';
import { Button } from "@/components/ui/button"
import pfp from '../assets/pfp.jpg'

const Navbar = ({ progressData }) => {
  const handleNavClick = () => {
    if (progressData) {
      progressData()
    }
  };

  return (
    <div className='flex p-8 text-xs justify-center w-full'>
      <div className='text-[#f0f6fc] flex border-[1.5px] border-solid border-[#36363b] py-2 px-4 rounded-2xl justify-between gap-4 text-white bg-[#262629] items-center'>
        <Link to='/' onClick={handleNavClick}>
          <span className='flex text-sm items-center  gap-2'>
            <img 
              src={pfp} 
              alt="profile"
              className='w-9 h-9 object-cover rounded-full transition duration-500  blur-0 scale-100 ' 
            />
          </span>
        </Link>
        <Link to='/about' onClick={handleNavClick}><Button>About</Button></Link>
        <Link to='/contact' onClick={handleNavClick}><Button>Contact</Button></Link>
        <Link to='https://discord.gg/mr3S7SVjMc' target='_blank'><Button>Discord</Button></Link>
      </div>
    </div>
  );
};

export default Navbar;