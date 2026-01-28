import React from 'react'
import mongodb from '../assets/mongodb.svg'
import express from '../assets/express.svg'
import react from '../assets/react.svg'
import nodejs from '../assets/nodejs.svg'
import js from '../assets/js.svg'
import git from '../assets/git.svg'
import github from '../assets/github.svg'
import postman from '../assets/postman.svg'
import mysql from '../assets/mysql.svg'
import vscode from '../assets/vscode.svg'
import tailwind from '../assets/tailwind.svg'
import docker from '../assets/docker.svg'
import python from '../assets/python.svg'




const Skills = () => {

  return (
    <>
     <div className='max-w-5xl mx-auto px-8 mt-20'>
        <h1 className='text-2xl md:text-3xl font-bold py-10 '>Skills & Stack</h1>     
        {/* Web development */}
        <div className='mb-10'>
          <h3 className='mb-3 font-semibold'>Web Development</h3>
          <div className='flex flex-wrap gap-3'>
            <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear  border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
              <img src={js} className='w-5 h-5 inline mr-2 ' alt="React" />
              JavaScript</button>
            <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear  border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
              <img src={react} className='w-5 h-5 inline mr-2 ' alt="React" />
              React</button>
            <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear  border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
              <img src={tailwind} className='w-5 h-5 inline mr-2 ' alt="React" />
              tailwind</button>
            <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear  border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
              <img src={nodejs} className='w-5 h-5 inline mr-2 ' alt="React" />
              NodeJS</button>
            <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear  border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
              <img src={express} className='w-5 h-5 inline mr-2 ' alt="React" />
              Express</button>
            <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear  border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
              <img src={python} className='w-5 h-5 inline mr-2 ' alt="React" />
              Python</button>
          </div>
        </div>

        {/* Tools And Platforms */}
        <div className='mb-10'>
          <h3 className='mb-3 font-semibold'>Tools And Platforms</h3>
          <div className='flex flex-wrap gap-3'>
            <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
              <img src={git} className='w-5 h-5 inline mr-2 ' alt="React" />
              Git & GitHub</button>
            <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
              <img src={postman} className='w-5 h-5 inline mr-2 ' alt="React" />
              Postman</button>
            <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
              <img src={vscode} className='w-5 h-5 inline mr-2 ' alt="React" />
              VS Code</button>
          </div>
        </div>

        {/* Database And Storage */}
        <div className='mb-10'>
          <h3 className='mb-3 font-semibold'>Database And Storage</h3>
          <div className='flex flex-wrap gap-3'>
            <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
              <img src={mysql} className='w-5 h-5 inline mr-2 ' alt="React" />
              MySQL</button>
            <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
              <img src={mongodb} className='w-5 h-5 inline mr-2 ' alt="React" />

              MongoDB</button>
          </div>
        </div>      

        {/* Devops And Cloud */}
        <div className='mb-10'>
          <h3 className='mb-3 font-semibold'>Devops And Cloud</h3>
          <div className='flex flex-wrap gap-3'>
            <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
              <img src={github} className='w-5 h-5 inline mr-2 ' alt="React" />
              GitHub Actions</button>
            <button className='bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear border-[0.5px] rounded-lg border-[#393c40] py-2 px-3'>
              <img src={docker} className='w-5 h-5 inline mr-2 ' alt="React" />
              Docker</button>
          </div>
        </div>      

      </div>
    </>
  )
}

export default Skills