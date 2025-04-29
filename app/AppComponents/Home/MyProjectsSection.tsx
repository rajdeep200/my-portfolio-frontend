import React from 'react'
import PrimaryHeading from './PrimaryHeading'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '@/app/constants/projectsConstant'

const MyProjectsSection = () => {
  return (
    <div id="project-section" className="mt-[15%] mb-[10%] lg:my-[10%]">
      <PrimaryHeading
        firstTitle='RECENT'
        secondTitle="PROJECTS"
        textCentered={true}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto w-full'>
        {
          PROJECTS.map(project => <ProjectCard key={project.id} project={project}/> )
        }
      </div>
      <p className='text-center font-poppins font-bold text-white my-[10%] lg:my-[4%]'>and many more...</p>
    </div>
  )
}

export default MyProjectsSection