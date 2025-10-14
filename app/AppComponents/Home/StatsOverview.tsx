"use client";

import { STATS_OVERVIEW } from "@/app/constants/statsOverview";
import React from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const StatsOverview = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-[90%] sm:w-[88%] lg:w-[85%] mx-auto xl:mx-0 font-poppins">
      {/* subtle halo behind the stats row */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-2xl blur-2xl opacity-60"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(22,163,74,.22), rgba(37,99,235,.18), rgba(22,163,74,.22))",
          animation: prefersReducedMotion ? undefined : "spinSlow 18s linear infinite",
          mixBlendMode: "screen",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        variants={container}
        className="
          w-full
          grid gap-5 sm:gap-6
          grid-cols-2 sm:grid-cols-3
          items-stretch
          justify-items-center
        "
        role="list"
        aria-label="Key stats"
      >
        {STATS_OVERVIEW.map((stats, idx) => (
          <motion.div
            key={stats.id ?? idx}
            variants={item}
            role="listitem"
            className="
              relative w-full
              rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm
              px-4 py-4 sm:px-5 sm:py-5
              text-center
            "
          >
            {/* vertical divider on sm+ between columns */}
            <span
              aria-hidden
              className="
                hidden sm:block
                absolute top-1/2 right-[-.625rem] -translate-y-1/2 h-10 w-px
                bg-gradient-to-b from-transparent via-white/20 to-transparent
              "
            />

            {/* number */}
            <div
              className="
                text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none
                bg-clip-text text-transparent
                bg-gradient-to-br from-emerald-300 via-emerald-200 to-cyan-300
                drop-shadow-[0_6px_22px_rgba(16,185,129,0.15)]
              "
              aria-label={typeof stats.num === "string" ? stats.num : undefined}
            >
              {stats.num}
            </div>

            {/* label */}
            <p className="mt-2 text-xs sm:text-sm lg:text-base text-zinc-300 leading-5">
              {stats.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsOverview;
