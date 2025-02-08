'use client'

import React from "react";
import PrimaryHeading from "./PrimaryHeading";
import DynamicFlexSection from "./DynamicFlexSection";
import { TECH_SKILLS } from "@/app/constants/techSkillConstants";

const TechSkillSection = () => {
  return (
    <div id="tech-skills-section" className="mt-[15%] mb-[10%] lg:my-[10%]">
      <PrimaryHeading
        firstTitle='TECH'
        secondTitle="I HAVE USED"
        textCentered={true}
      />
      <div className="my-12">
      <DynamicFlexSection items={TECH_SKILLS} />
      </div>
    </div>
  );
};

export default TechSkillSection;
