import React from 'react'
import { useState } from 'react'
import ReactLogo from '../assets/react.svg'
import JSLogo from '../assets/js.svg'
import NodeJSLogo from '../assets/nodejs.svg'
import ExpressLogo from '../assets/express.svg'
import MongoDBLogo from '../assets/mongodb.svg'
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';



const Projects = () => {
  return (
    <>
    <div className='max-w-5xl mx-auto px-8 mt-30 mb-40'>
            <h1 className='text-2xl md:text-3xl font-bold py-10 '>Projects</h1>
            {/* card */}
            <div className="p-[0.5px] bg-linear-to-b  from-[#393c40] via-[#393c40] to-transparent rounded-lg">
                <div className="bg-linear-to-tr bg-[#1a1e26] to-[#15191f] flex justify-between p-5 rounded-lg">
                    
                    {/* holds data */}
                    <div className='flex flex-col gap-1'>
                        <h2 className="text-2xl text-white font-bold">SpeechFlow</h2>
                        <p className='text-[#9198a1] font-light text-sm '>Real time text to speech bot</p>
                        <p className='text-[#9198a1] font-normal text-sm leading-snuh mt-4'>
                            A minimal discord bot that converts text messages into speech and plays them in voice channels.
                            This project focuses<br /> on clarity, predictability and correctness over feature bloat. It does one thing take text and speak it reliably.
                        </p>
                        <p className='text-[#9198a1] font-normal text-sm leading-snuh mt-4'>Tech Stack</p>

                        <div className='flex py-2 flex-row text-sm gap-3'>
                                <img src={ReactLogo} className='w-5 h-5 inline mr-2 ' alt="React" />
                                <img src={JSLogo} className='w-5 h-5 inline mr-2 ' alt="React" />
                                <img src={NodeJSLogo} className='w-5 h-5 inline mr-2 ' alt="React" />
                                <img src={MongoDBLogo} className='w-5 h-5 inline mr-2 ' alt="React" />
                            {/* <button className='transition-transform duration-300 ease-in hover:-translate-y-2 hover:bg-[#393c40] py-2 px-4 rounded-sm'>
                                React
                            </button>
                            <button className='transition-transform duration-300 ease-in hover:-translate-y-2 hover:bg-[#393c40] py-2 px-4 rounded-sm'>
                                JavaScript
                            </button>
                            <button className='transition-transform duration-300 ease-in hover:-translate-y-2 hover:bg-[#393c40] py-2 px-4 rounded-sm'>
                                NodeJS
                            </button>
                            <button className='transition-transform duration-300 ease-in hover:-translate-y-2 hover:bg-[#393c40] py-2 px-4 rounded-sm'>
                                Express
                            </button>
                            <button className='transition-transform duration-300 ease-in hover:-translate-y-3 hover:bg-gray-950 py-2 px-4 rounded-sm'>
                                MongoDB
                            </button> */}
                            

                        </div>
                    </div>
                    {/* live links */}
                    <span className='flex  text-2xl gap-3 '>
                        <a href="https://github.com/ajajm"><FaGithub className /></a>
                        <span className="bg-linear-to-r from-[#e769f5]  to-[#fc79bd] inline-block text-transparent bg-clip-text font-extrabold"><a href="https"><MdOutlineArrowOutward className='text-3xl'/></a></span>
                    </span>
                </div>
            </div>


        </div>
    </>
  )
}

export default Projects