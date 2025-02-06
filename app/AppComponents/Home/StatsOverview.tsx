"use client";

import { STATS_OVERVIEW } from "@/app/constants/statsOverview";
import React from "react";
import { motion } from "framer-motion";

const StatsOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileInView={{opacity: 1, y:0}}
      className="w-[85%] mx-auto xl:mx-0"
    >
      <div className="w-full flex justify-center items-center font-poppins">
        {STATS_OVERVIEW.map((stats) => (
          <div
            key={stats.id}
            className="flex flex-col justify-center items-center"
          >
            <h2 className="text-white text-[40px] lg:text-[60px] font-bold">{stats.num}</h2>
            <p className="text-zinc-400 text-[15px] lg:text-[20px] leading-5 text-center">
              {stats.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatsOverview;
