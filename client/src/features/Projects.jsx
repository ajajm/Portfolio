import ReactLogo from '../assets/react.svg'
import NodeJSLogo from '../assets/nodejs.svg'
import MongoDBLogo from '../assets/mongodb.svg'
import { FaGithub } from 'react-icons/fa';
import { SiExpress } from "react-icons/si";
import { LuSquareArrowOutUpRight } from "react-icons/lu";


const Projects = () => {


  return (
    <>
        {/*  */}
        <div className='max-w-5xl mx-auto px-8 mt-25'>
                <h1 className='text-2xl md:text-3xl font-bold py-10 '>Projects</h1>
                {/* speechFlow card */}
                <div className="p-[0.5px] bg-linear-to-b  from-[#393c40] via-[#393c40] to-transparent rounded-lg">
                    <div className="bg-linear-to-tr bg-[#1a1e26] to-[#15191f] flex justify-between p-5 rounded-lg">
                        
                        {/* holds data */}
                        <div className='flex flex-col flex-1 gap-0.5'>

                            {/* header */}
                            <div className='flex justify-between items-center '>
                                
                                <h2 className="text-2xl font-bold">SpeechFlow</h2>
                                {/* live links */}
                                <span className='flex justify-center text-[#9198a1] items-center text-2xl gap-3 '>
                                    <a className='hover:text-[#f0f6fc]' href='https://github.com/ajajm/yt-converter' target='_blank'><FaGithub /></a>
                                    <a className='hover:text-[#f0f6fc] active:scale-85' href="https://" target="_blank"><LuSquareArrowOutUpRight /></a>
                                 </span>
                            </div>

                            <p className='text-[#9198a1] font-light text-sm '>Real time text to speech bot</p>
                            <p className='text-[#9198a1] font-normal text-sm leading-snuh mt-4'>
                                A minimal discord bot that converts text messages into speech and plays them in voice channels.
                                This project focuses<br /> on clarity, predictability and correctness over feature bloat. It does one thing take text and speak it reliably.
                            </p>
                            <p className='text-[#9198a1] font-bold text-sm leading-snuh mt-4'>Tech Stack</p>

                            {/* tect stack logo */}
                            <div className='flex mt-2 flex-row text-sm gap-3'>
                                    <img src={MongoDBLogo} className='w-5 h-5 inline mr-2 ' alt="React" />
                                    <SiExpress className='w-5 h-5 inline mr-2' />
                                    <img src={ReactLogo} className='w-5 h-5 inline mr-2 ' alt="React" />
                                    <img src={NodeJSLogo} className='w-5 h-5 inline mr-2 ' alt="React" />
                            </div>
                        </div>

                    </div>
                </div>

                {/* yt-download */}
                <div className="p-[0.5px] mt-10 bg-linear-to-b  from-[#393c40] via-[#393c40] to-transparent rounded-lg">
                    <div className="bg-linear-to-tr bg-[#1a1e26] to-[#15191f] flex justify-between p-5 rounded-lg">
                        
                        {/* holds data */}
                        <div className='flex flex-col flex-1 gap-0.5'>
                            {/* header */}
                            <div className='flex justify-between items-center '>
                                <h2 className="text-2xl font-bold">YTM Bit</h2>
                                {/* live links */}
                                <span className='flex justify-center text-[#9198a1] items-center text-2xl gap-3 '>
                                    <a className='hover:text-[#f0f6fc]' href='https://github.com/ajajm/yt-converter' target='_blank'><FaGithub /></a>
                                    <a className='hover:text-[#f0f6fc] active:scale-85' href="https://" target="_blank"><LuSquareArrowOutUpRight /></a>
                                 </span>
                            </div>
                            <p className='text-[#9198a1] font-light text-sm '>A simple media converter</p>
                            <p className='text-[#9198a1] font-normal text-sm leading-snuh mt-4'>
                                Convert and download YouTube videos as MP3 or MP4 easily. Built using yt-dlp, this tool provides  a simple yet powerful <br />backend with a minimal frontend interface.
                            </p>
                            <p className='text-[#9198a1] font-bold text-sm leading-snuh mt-4'>Tech Stack</p>

                            {/* tect stack logo */}
                            <div className='flex mt-2 flex-row  text-sm gap-3'>
                                    <img src={MongoDBLogo} className='w-5 h-5 inline mr-2 ' alt="React" />
                                    <SiExpress className='w-5 h-5 inline mr-2' />
                                    <img src={ReactLogo} className='w-5 h-5 inline mr-2 ' alt="React" />
                                    <img src={NodeJSLogo} className='w-5 h-5 inline mr-2 ' alt="React" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Projects