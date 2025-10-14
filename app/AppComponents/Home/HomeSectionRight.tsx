"use client";

import React from "react";
import StatsOverview from "./StatsOverview";
import PrimaryHeading from "./PrimaryHeading";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const HomeSectionRight = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      className="
        xl:w-[55%] xl:mt-[5.5rem]
        flex flex-col items-center xl:items-start justify-center xl:justify-start
        font-poppins
      "
    >
      <div className="w-full">
        <PrimaryHeading firstTitle="SOFTWARE" secondTitle="ENGINEER" />
        {/* subtle brand accent under the heading */}
        <span
          aria-hidden
          className="mt-2 block h-[2px] w-28 rounded-full bg-gradient-to-r from-emerald-400/80 to-cyan-400/70 mx-auto xl:mx-0"
        />
      </div>

      {/* tighter readable width on larger screens; centered on small, left on xl */}
      <p
        className="
          mt-4 text-center xl:text-left text-zinc-300
          text-sm sm:text-base lg:text-xl leading-relaxed
          w-[88%] sm:w-[80%] lg:w-[60%] xl:w-[70%] 2xl:max-w-[46ch]
        "
      >
        Passionate Full Stack Developer dedicated to building seamless and engaging user
        experiences. Skilled in transforming ideas into fully functional and beautifully
        crafted digital products.
      </p>

      {/* stats block with soft top divider for structure */}
      <div className="mt-10 w-full">
        <div className="mx-auto xl:mx-0 w-[88%] sm:w-[80%] lg:w-[60%] xl:w-[70%]">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />
          <StatsOverview />
        </div>
      </div>

      {/* optional: reserve space if you'll add WhatIDo later
      <div className="mt-8">
        <WhatIDoSection />
      </div>
      */}
    </motion.section>
  );
};

export default HomeSectionRight;
