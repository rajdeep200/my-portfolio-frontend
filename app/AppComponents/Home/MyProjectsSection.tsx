import React from "react";
import PrimaryHeading from "./PrimaryHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/app/constants/projectsConstant";

const MyProjectsSection = () => {
  return (
    <section id="project-section" className="mt-[15%] mb-[10%] lg:my-[10%] font-poppins">
      <PrimaryHeading firstTitle="RECENT" secondTitle="PROJECTS" textCentered />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Centered rows, ~20px gap */}
        <div className="flex flex-wrap justify-center gap-5">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="
                /* responsive card slot: doesn't stretch, wraps & centers */
                flex justify-center
                flex-[0_1_320px] sm:flex-[0_1_360px] md:flex-[0_1_380px]
              "
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center font-bold text-white my-[10%] lg:my-[4%]">and many more...</p>
    </section>
  );
};

export default MyProjectsSection;
