import React from 'react'
import StatsOverview from './StatsOverview'
import PrimaryHeading from './PrimaryHeading'

const HomeSectionRight = () => {
  return (
    <div className='xl:w-[55%] xl:mt-[5.5rem] flex flex-col justify-center xl:justify-start items-center xl:items-start'>
        <PrimaryHeading firstTitle='SOFTWARE' secondTitle='ENGINEER' />
        <p className='mt-3 w-[80%] lg:w-[45%] xl:w-[70%] text-xs lg:text-xl text-center xl:text-start font-poppins text-zinc-400'>Passionate Full Stack Developer dedicated to building seamless and engaging user experiences. Skilled in transforming ideas into fully functional and beautifully crafted digital products.</p>
        <div className='mt-10'>
          <StatsOverview/>
        </div>
        {/* <WhatIDoSection/> */}
    </div>
  )
}

export default HomeSectionRight