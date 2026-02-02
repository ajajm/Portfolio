import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Import logos
import oscLogo from '@/assets/open_source_connect_logo.jpg'
import googleLogo from '@/assets/google_logo.jpg'
import sibros from '@/assets/sibros_logo.png'
import nutan from '@/assets/nutan_logo.jpg'
import linkarrow from '@/assets/linkarrow.png'

const Experience = () => {
    const [expandedRoles, setExpandedRoles] = useState({})

    const toggleDescription = (orgIndex, roleIndex) => {
        const key = `${orgIndex}-${roleIndex}`
        setExpandedRoles(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    // LinkedIn-style experience data with organizations and multiple roles
    const experienceData = [
        {
          organization: 'Open Source Connect',
          logo: oscLogo,
          totalDuration: '2 mos',
          hasCredential: true,
          credentialLink: '/credentials/open-source-connect',
          roles: [
              {
                title: 'Contributor',
                type: 'Part-time',
                duration: 'Feb 2026 - Present',
                period: '1 mo',
                description: [
                  'Contributing to open-source projects',
                  'Collaborating with global developers',
                  'Building community engagement'
                ]
            }
          ]
        },
        {
            organization: 'Google',
            logo: googleLogo,
            totalDuration: '6 mos',
            hasCredential: true,
            credentialLink: '/credentials/google-student-ambassador',
            roles: [
                {
                    title: 'Student Ambassador',
                    type: 'Internship',
                    duration: 'Sep 2025 - Feb 2026',
                    period: '6 mos',
                    location: '',
                    description: [
                        'Representing Google gemini on campus',
                        'Organizing tech workshops and events',
                        'Building student developer community'
                    ]
                }
            ]
        },
        {
            organization: 'Sibros',
            logo: sibros,
            totalDuration: '3 mos',
            hasCredential: false,
            roles: [
                {
                    title: 'Backend Developer Intern',
                    type: 'Internship',
                    duration: 'Nov 2025 - Jan 2026',
                    period: '3 mos',
                    location: 'Pune, India',
                    description: [
                        'Built a RESTful backend API',
                        'Implemented JWT-based authentication',
                        'Applied MVC architecture and API testing'
                    ]
                }
            ]
        },
        {
          organization: 'Nutan',
          logo: nutan,
          totalDuration: '3 mos',
          hasCredential: false,
          roles: [
              {
                  title: 'Technical Lead Intern',
                  type: 'Internship',
                  duration: 'May 2025 - July 2025',
                  period: '3 mos',
                  location: 'Nashik, India',
                  description: [
                      'Orchestrated a 6-week digital literacy program for 100+ students',
                      'Developed and deployed a functional website using the MERN stack',
                      'Streamlining information delivery through automation'
                  ]
              }
          ]
      }
    ]
    
  return (
    <section className="w-full py-6" id="experience">
      <div className="max-w-5xl mx-auto px-8 mt-20">
        <h2 className="text-2xl md:text-3xl font-bold py-10 ">Experience</h2>
        
        <ul className="list-none  m-0 p-0">
          {experienceData.map((experience, orgIndex) => (
            <li 
              key={orgIndex} 
              className="border-b border-[#393c40] py-4 first:pt-3 last:border-0"
            >
              <div className="flex text-sm gap-2">
                {/* Company Logo */}
                <div className="shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded overflow-hidden">
                    {typeof experience.logo === 'string' && (experience.logo.endsWith('.jpg') || experience.logo.endsWith('.png') || experience.logo.endsWith('.svg')) ? (
                      <img src={experience.logo} alt={`${experience.organization} logo`} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-2xl">{experience.logo}</span>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="grow min-w-0  flex flex-col">
                  {/* Check if multiple roles */}
                  {experience.roles.length > 1 ? (
                    <>
                      {/* Company Name as Header for Multiple Roles */}
                      <div className="flex flex-col">
                        <span className="font-semibold text-[15px] text-white leading-tight">
                          {experience.organization}
                        </span>
                        <span className="text-sm text-[rgba(255,255,255,0.6)] mt-0.5">
                          {experience.totalDuration}
                        </span>
                        
                        {experience.hasCredential && (
                          <Link to={experience.credentialLink}>
                            <button className="mt-3 px-4 py-1.5 text-sm font-semibold border border-white/60 rounded-full text-white hover:bg-white/10 hover:border-white/80 transition-all w-fit">
                              Show credential <span>linkarrow</span>
                            </button>
                          </Link>
                        )}
                      </div>

                      {/* Nested Roles */}
                      <div className="mt-3 -ml-[2px]">
                        {experience.roles.map((role, roleIndex) => {
                          const key = `${orgIndex}-${roleIndex}`
                          const isExpanded = expandedRoles[key]

                          return (
                            <div 
                              key={roleIndex}
                              className={`relative pl-5 ${roleIndex > 0 ? 'mt-4' : ''}`}
                            >
                              {/* Timeline Line */}
                              {roleIndex < experience.roles.length - 1 && (
                                <div className="absolute left-[9px] top-6 bottom-0 w-px bg-[#2d2d2d]"></div>
                              )}
                              
                              {/* Timeline Dot */}
                              <div className="absolute left-[5px] top-[6px] w-[9px] h-[9px] rounded-full bg-[#404040] ring-[3px] ring-[#0d1117]"></div>

                              <div className="flex flex-col">
                                <span className="font-semibold text-[15px] text-white leading-tight">
                                  {role.title}
                                </span>
                                
                                <span className="text-sm text-[rgba(255,255,255,0.6)] mt-px">
                                  {role.type}
                                </span>
                                
                                <span className="text-xs text-[rgba(255,255,255,0.6)] mt-1">
                                  {role.duration} · {role.period}
                                </span>
                                
                                {role.location && (
                                  <span className="text-xs text-[rgba(255,255,255,0.6)] mt-0.5">
                                    {role.location}
                                  </span>
                                )}

                                {/* Description */}
                                {role.description && role.description.length > 0 && (
                                  <div className="mt-2">
                                    {isExpanded ? (
                                      <ul className="text-sm text-white/90 leading-[1.4] list-none space-y-1">
                                        {role.description.map((desc, idx) => (
                                          <li key={idx}>• {desc}</li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <div className="text-sm text-white/90 leading-[1.4] line-clamp-2">
                                        {role.description.join(' · ')}
                                      </div>
                                    )}
                                    {role.description.length > 1 && (
                                      <button
                                        onClick={() => toggleDescription(orgIndex, roleIndex)}
                                        className="text-sm font-semibold text-[rgba(255,255,255,0.6)] hover:text-white mt-1"
                                      >
                                        {isExpanded ? '...see less' : '...see more'}
                                      </button>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </>
                  ) : (
                    /* Single Role - Title is Primary */
                    <div className="flex flex-col">
                      <span className="font-semibold text-[15px] text-white leading-tight">
                        {experience.roles[0].title}
                      </span>
                      
                      <span className="text-sm text-[rgba(255,255,255,0.6)] mt-0.5">
                        {experience.organization} · {experience.roles[0].type}
                      </span>
                      
                      <span className="text-xs text-[rgba(255,255,255,0.6)] mt-1">
                        {experience.roles[0].duration} · {experience.roles[0].period}
                      </span>
                      
                      {experience.roles[0].location && (
                        <span className="text-xs text-[rgba(255,255,255,0.6)] mt-0.5">
                          {experience.roles[0].location}
                        </span>
                      )}

                      {experience.hasCredential && (
                        <Link to={experience.credentialLink}>
                          <button className="mt-3 px-4 py-1.5 text-sm font-semibold border border-white/60 rounded-full text-white hover:bg-white/10 hover:border-white/80 transition-all w-fit">
                            Show credential ↗
                          </button>
                        </Link>
                      )}

                      {/* Description */}
                      {experience.roles[0].description && experience.roles[0].description.length > 0 && (
                        <div className="mt-2">
                          {expandedRoles[`${orgIndex}-0`] ? (
                            <ul className="text-sm text-white/90 leading-[1.4] list-none space-y-1">
                              {experience.roles[0].description.map((desc, idx) => (
                                <li key={idx}>• {desc}</li>
                              ))}
                            </ul>
                          ) : (
                            <div className="text-sm text-white/90 leading-[1.4] line-clamp-2">
                              {experience.roles[0].description.join(' · ')}
                            </div>
                          )}
                          {experience.roles[0].description.length > 1 && (
                            <button
                              onClick={() => toggleDescription(orgIndex, 0)}
                              className="text-sm font-semibold text-[rgba(255,255,255,0.6)] hover:text-white mt-1"
                            >
                              {expandedRoles[`${orgIndex}-0`] ? '...see less' : '...see more'}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience
