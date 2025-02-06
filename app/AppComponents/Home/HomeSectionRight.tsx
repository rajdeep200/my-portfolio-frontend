import React from 'react'
import StatsOverview from './StatsOverview'

const HomeSectionRight = () => {
  return (
    <div className='xl:w-[55%] xl:mt-[5.5rem] flex flex-col justify-center xl:justify-start items-center xl:items-start'>
        <h1 className='text-[52px] lg:text-[70px] xl:text-[90px] flex flex-col justify-center items-center xl:items-start leading-[55px] lg:leading-[65px] xl:leading-[75px]'>
            <span className='font-poppins font-extrabold text-white'>SOFTWARE</span>
            <span className='font-poppins font-extrabold text-zinc-600'>ENGINEER</span>
        </h1>
        <p className='mt-3 w-[80%] lg:w-[45%] xl:w-[70%] text-xs lg:text-xl text-center xl:text-start font-poppins text-zinc-400'>Passionate Full Stack Developer dedicated to building seamless and engaging user experiences. Skilled in transforming ideas into fully functional and beautifully crafted digital products.</p>
        <div className='mt-10'>
          <StatsOverview/>
        </div>
    </div>
  )
}

export default HomeSectionRight