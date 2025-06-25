
import ProjectCard from '@/Components/ProjectCard'
import { Projects } from '@/Constants'

import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/Mountains.jpg)"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] h-[200px]'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              skills={project.skills}
          />
        ))}
      </div>
    </div>
  )
}

export default Page