import React from 'react'
import PrimaryHeading from './PrimaryHeading'
import ExperienceComponent from './ExperienceCard'
import { EXP_LIST } from '@/app/constants/experienceConstant'

const MyExp = () => {
  return (
    <div id="exp-section" className="mt-[10%] mb-[10%] lg:my-[10%]">
      <PrimaryHeading
        firstTitle='My'
        secondTitle="EXPERIENCE"
        textCentered={true}
      />
      <ExperienceComponent experienceDataList={EXP_LIST}/>
    </div>
  )
}

export default MyExp