"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type Item = { id: number; label: string; icon: React.ReactNode };

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

const chipIn: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const DynamicFlexSection: React.FC<{ items: Item[] }> = ({ items }) => {
  return (
    <section className="font-poppins">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        variants={container}
        className="
          mx-auto max-w-6xl
          grid gap-4 sm:gap-5 md:gap-6
          grid-cols-1
          [@media(min-width:420px)]:grid-cols-2
          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
          px-4 sm:px-6
        "
      >
        {items.map((item) => (
          <motion.div key={item.id} variants={chipIn} className="w-full">
            <button
              type="button"
              className="
                group relative w-full isolate overflow-hidden
                rounded-2xl
                bg-zinc-900/70
                border border-white/10
                backdrop-blur-sm
                text-white
                px-5 py-3 md:px-6 md:py-4
                shadow-[0_8px_28px_rgba(0,0,0,0.55)]
                transition-transform duration-300 hover:-translate-y-0.5
                outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
            >
              {/* 1) OUTER NEON HALO — conic gradient, spins slowly, clipped to card */}
              <span
                aria-hidden
                className="
                  pointer-events-none absolute -inset-4 sm:-inset-5 md:-inset-6
                  -z-10 rounded-3xl
                  blur-2xl sm:blur-3xl opacity-70 md:opacity-90
                  animate-spin-slow
                  mix-blend-screen
                "
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(34,197,94,.35), rgba(59,130,246,.28), rgba(168,85,247,.28), rgba(34,197,94,.35))",
                }}
              />

              {/* 2) BREATHING INNER GLOW — soft emerald/cyan fog */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 rounded-2xl animate-pulse-soft"
                style={{
                  boxShadow:
                    "0 0 70px 18px rgba(16,185,129,0.10), 0 0 90px 24px rgba(59,130,246,0.08)",
                }}
              />

              {/* 3) EDGE SWEEP RING — subtle light pass on hover */}
              <span
                aria-hidden
                className="
                  pointer-events-none absolute inset-0 rounded-2xl opacity-0
                  transition-opacity duration-300 group-hover:opacity-100
                "
                style={{
                  background:
                    "radial-gradient(240px 140px at 10% -10%, rgba(34,197,94,.25), transparent 60%), radial-gradient(240px 140px at 110% 110%, rgba(59,130,246,.25), transparent 60%)",
                }}
              />

              {/* 4) CONTENT */}
              <span className="relative z-[1] flex items-center justify-center gap-3 md:gap-3.5 text-sm md:text-lg font-semibold">
                <span
                  className="
                    grid place-items-center
                    size-7 md:size-8
                    rounded-full bg-white/5 ring-1 ring-white/10
                    [&>svg]:h-4 [&>svg]:w-4 md:[&>svg]:h-5 md:[&>svg]:w-5
                    [&>img]:h-full [&>img]:w-full [&>img]:object-contain
                  "
                  aria-hidden
                >
                  {item.icon}
                </span>
                <span className="truncate">{item.label}</span>
              </span>

              {/* 5) CLEAN EDGE RING to separate from black background */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"
              />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DynamicFlexSection;
