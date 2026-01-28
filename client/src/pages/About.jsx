import React from 'react'
import Socials from '../components/Socials'
import pfp from '../assets/pfp.jpg'

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-12 md:mt-24">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            I’m{" "}
            <span className="bg-linear-to-r from-[#e769f5] to-[#fc79bd] inline-block text-transparent bg-clip-text font-extrabold">
              Md Ajaj
            </span>
          </h1>

          <p className="text-[#9198a1] text-base leading-relaxed mb-6">
            I am a Computer Science undergraduate working toward a career as a
            software engineer, with a strong focus on applied Generative AI and
            AI agent systems. My interests lie in building practical, scalable
            systems aligned with real world use casesnot academic only
            experiments.
          </p>

          <p className="text-[#9198a1] text-base leading-relaxed mb-6">
            I primarily work with Python, C, JavaScript and Node.js, developing
            backend logic, automation workflows and AI powered applications. In
            parallel, I’m strengthening my understanding of cloud
            infrastructure and CI/CD through hands on deployment, versioning,
            and system reliability practices.
          </p>

          <p className="text-[#9198a1] text-base leading-relaxed mb-6">
            I value structured problem solving, clean implementations and
            continuous improvement through real, production oriented projects.
          </p>

          <p className="text-[#9198a1] text-base leading-relaxed">
            I’m open to internships, entry level roles and project based
            opportunities in AI/ML and backend development.
          </p>
        </div>

       {/* Right Profile */}
      <div className="w-full lg:w-[240px] flex justify-center lg:justify-start">
        <div className="mt-8 lg:mt-0 flex flex-col items-center lg:items-start max-w-[220px] mb-12">
          <img
            alt="Md Ajaj"
            loading="lazy"
            width="200"
            height="200"
            className="rounded-2xl mb-4"
            src={pfp}
          />
          
        </div>
      </div>

      </div>
    </div>
  )
}

export default About
