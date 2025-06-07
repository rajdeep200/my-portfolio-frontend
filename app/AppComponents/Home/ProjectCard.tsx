"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import Image from "next/image";
import { Project } from "@/app/constants/projectsConstant";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Card className="w-[80%] h-full mx-auto mt-4 lg:mt-[8rem] xl:mt-[5.5rem] xl:mx-0 relative">
        <CardHeader className="flex justify-center items-center min-h-[150px]">
          {project.img}
        </CardHeader>
        <CardContent className="mx-auto flex flex-col justify-between pb-[6rem]">
          <div className="flex flex-col gap-y-5 justify-center items-center">
            <p className="font-poppins text-center text-[15px] leading-[1.5em] text-zinc-500 font-medium">
              {project.description}
            </p>
          </div>
          <Button
            onClick={() => handleClick(project.link)}
            type="submit"
            className="shadow-md shadow-zinc-400 bg-zinc-800 text-[15px] px-12 py-3 my-2 absolute bottom-[25px] left-1/2 -translate-x-1/2"
          >
            Visit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
