import React from 'react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

const Experience = () => {

    const [selectedWork, setSelectedWork] = useState('Sibros')

    //stores all the work experience data
    const workInfo ={
        Sibros: {
            role: 'Backend Developer Intern',
            duration: 'Nov 2025 - Jan 2026',
            location: 'Pune, India',
            description: {
                line1:'Built a RESTful backend API',
                line2:'Implemented JWT-based authentication',
                line3:'Applied MVC architecture and API testing'
            }
        },
        Nutan: {
            role: 'Technical Lead Intern',
            duration: 'May 2025 - July 2025',
            location: 'Nashik, India',
            description: {
                line1:'Orchestrated a 6-week digital literacy program for 100+ students',
                line2:'Developed and deployed a functional website using the MERN stack',
                line3:'Streamlining information delivery through automation'
            }
        },
        company2: {
            role: 'JPM',
            duration: 'Sep 2025 - Jan 2026',
            description: {
                line1:'Description line 1',
                line2:'Description line 2',
                line3:'Description line 3'
            }
        }
    }

    //display the work experience - default view
    const workDescription =  (elem, value) => {
        const data = workInfo[selectedWork]

        return <div> 
                <div className='flex flex-col items-start justify-center font-light text-sm  gap-1 text-gray-300'>
                    <h1 className="text-xl md:text-3xl text-white font-bold ">{data.role}, 
                        <span className="bg-linear-to-r from-[#e769f5]  to-[#fc79bd] inline-block text-transparent bg-clip-text font-extrabold ml-1">@{selectedWork}</span>
                    </h1>

                        <p className='text-[#9198a1]'>{data.duration}</p>
                        <p className='text-[#9198a1]'>{data.location}</p>                       

                    {/* <p className='text-[#9198a1]'>{data.duration}</p>
                    <p className='text-[#9198a1]'>{data.location} </p> */}
                </div>

                <div className='py-4 text-sm text-[#9198a1] font-normal leading-loose'>
                    <ul className='list-disc pl-4  list-outside text-[#9198a1]'>
                        <li>{data.description.line1}</li>
                        <li>{data.description.line2}</li>
                        <li>{data.description.line3}</li>
                    </ul>

                </div>
            </div>
    }
    
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-15 md:mt-20">
  <h1 className="text-2xl md:text-3xl font-bold py-7">
    Work Experience
  </h1>

  <div className="flex flex-col md:flex-row gap-4 lg:gap-16 mt-3">

    {/* Buttons section */}
    <section
      className="
        pb-4 mb
        border-[#393c40]
        border-b-1 md:border-0
        flex flex-row md:flex-col
        gap-4
        overflow-x-auto md:overflow-x-visible
        md:min-w-45
      "
    >
      <Button
        value="Sibros"
        onClick={(e) => {
          setSelectedWork(e.target.value)
          console.log('button clicked !')
          console.table(workInfo)
          if (selectedWork === 'xyzz')
            console.log(workInfo[selectedWork])
        }}
        className="
        bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear border-[0.5px] rounded-lg border-[#393c40]
          px-5 py-2 rounded-md whitespace-nowrap
        text-white
          md:w-full
        "
      >
        Sibros
      </Button>

      <Button
        value="Nutan"
        onClick={(e) => {
          setSelectedWork(e.target.value)
          console.log('button clicked !')
        }}
        className="
        bg-[#1a1e26] font-light text-sm hover:-translate-y-1  transition ease-linear border-[0.5px] rounded-lg border-[#393c40]
          px-5 py-2 rounded-md whitespace-nowrap
          text-white
          md:w-full
        "
      >
        Nutan
      </Button>

    </section>

    {/* Work description */}
    <div className="w-full h-[200px]">
      {workDescription()}
    </div>

  </div>
</div>


  )
}

export default Experience