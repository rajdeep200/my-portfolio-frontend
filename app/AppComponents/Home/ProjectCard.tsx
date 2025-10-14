"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Project } from "@/app/constants/projectsConstant";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

type ProjectCardProps = { project: Project };

const cardIn: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center font-poppins">
      <motion.article
        variants={cardIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        className="
          group relative w-full sm:w-[85%] xl:w-full
          mx-auto mt-6 lg:mt-[8rem] xl:mt-[5.5rem]
          isolate overflow-hidden rounded-3xl transform-gpu
          transition-all duration-300 hover:-translate-y-1 lg:min-h-[500px]
        "
      >
        {/* Subtle emerald/cyan halo (same vibe as tech chips) */}
        <span
          aria-hidden
          className="
            pointer-events-none absolute -inset-7 md:-inset-8
            -z-10 rounded-[30px] blur-2xl sm:blur-3xl opacity-70 md:opacity-85
            animate-spin-slow mix-blend-screen
          "
          style={{
            background:
              // toned-down, two-color conic for consistency with tech section
              "conic-gradient(from 0deg, rgba(22,163,74,.28), rgba(37,99,235,.22), rgba(22,163,74,.28))",
          }}
        />

        {/* Soft inner glow (emerald/cyan only) */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-[30px]"
          style={{
            boxShadow:
              "0 0 110px 28px rgba(16,185,129,0.12), 0 0 120px 30px rgba(59,130,246,0.10)",
          }}
        />

        {/* Thin edge ring for separation on black */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-[25px] ring-1 ring-white/14"
        />

        <Card
          className="
            relative h-full rounded-3xl overflow-hidden
            border border-white/35
            bg-gradient-to-br from-white/14 via-white/10 to-white/8
            backdrop-blur-xl text-white
            shadow-[0_15px_50px_rgba(0,0,0,0.55)]
            grid grid-rows-[auto_1fr_auto]   /* header / scroll body / footer */
          "
        >
          {/* Subtle top accent (not flashy) */}
          <div
            aria-hidden
            className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400/70 via-emerald-300/50 to-cyan-400/70"
          />

          {/* Header: rectangular logo plate so dark logos pop */}
          <CardHeader className="relative flex items-center justify-center min-h-[140px] lg:min-h-[170px] p-6">
            <span
              className="
                grid place-items-center rounded-2xl
                bg-white/90 text-black ring-1 ring-black/5
                shadow-[0_10px_30px_rgba(0,0,0,0.30)]
                px-5 py-4
              "
            >
              <span
                className="
                  block max-w-full
                  [&>img]:max-h-28 [&>img]:w-auto [&>img]:h-auto [&>img]:object-contain
                  [&>svg]:h-24 [&>svg]:w-24 lg:[&>svg]:h-28 lg:[&>svg]:w-28
                "
              >
                {project.img}
              </span>
            </span>
          </CardHeader>

          {/* Body: scrollable when long */}
          <CardContent
            className="px-6 pb-4 overflow-y-auto"
            style={{
              // leaves comfortable space for header & footer across sizes
              maxHeight: "min(44vh, 320px)",
            }}
          >
            <p className="mx-auto max-w-[34ch] text-center text-[13px] sm:text-[14px] lg:text-[15px] leading-7 text-zinc-100">
              {project.description}
            </p>
          </CardContent>

          {/* Footer: solid emerald CTA to match tech section */}
          <div className="px-6 pb-6 flex items-center justify-center">
            <Button
              asChild
              className="
                relative isolate overflow-hidden rounded-xl
                px-8 py-3 text-[14px] sm:text-[15px] font-semibold
                bg-emerald-500 hover:bg-emerald-400 text-black
                border border-black/10
                shadow-[0_10px_30px_rgba(16,185,129,0.28)]
                transition-all duration-300 hover:-translate-y-0.5
                focus-visible:ring-2 focus-visible:ring-emerald-300
                focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {/* subtle inner shine on hover */}
                <span
                  aria-hidden
                  className="
                    pointer-events-none absolute inset-0 rounded-xl opacity-0
                    transition-opacity duration-300 group-hover:opacity-100
                    [background:radial-gradient(200px_110px_at_12%_-12%,rgba(255,255,255,.28),transparent_60%)]
                  "
                />
                Visit
              </a>
            </Button>
          </div>
        </Card>
      </motion.article>
    </div>
  );
};

export default ProjectCard;
