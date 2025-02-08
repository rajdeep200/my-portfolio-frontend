import { Experience } from "@/app/constants/experienceConstant";
import React from "react";

interface ExperienceComponentProps {
  experienceDataList: Experience[];
}

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({
  experienceDataList,
}) => {
  return (
    <div className="my-[10%] lg:my-[5%] flex flex-col justify-center">
      {experienceDataList.map((experienceData) => (
        <div
          key={experienceData.company}
          className="max-w-lg mx-auto p-4 shadow-lg rounded-lg font-poppins"
        >
          <div className="flex items-center gap-3">
            <span>{experienceData.logo}</span>
            <div>
              <h2 className="text-xl lg:text-3xl text-white font-semibold">
                {experienceData.company}
              </h2>
              <p className="text-gray-300 lg:text-lg">
                {experienceData.duration}
              </p>
            </div>
          </div>
          <div className="mt-4 border-gray-300 pl-4">
            {experienceData.roles.map((role, index) => (
              <div
                key={index}
                className="flex flex-row justify-start items-baseline gap-x-3 mb-6"
              >
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div>
                  <h3 className="text-lg lg:text-2xl font-semibold text-white lg:mb-3">
                    {role.title}
                  </h3>
                  <p className="text-gray-300 lg:text-xl lg:mb-3">
                    {role.employmentType}
                  </p>
                  <p className="text-gray-400 lg:text-xl lg:mb-3">{role.period}</p>
                  <p className="text-gray-300 lg:text-xl">{role.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceComponent;
