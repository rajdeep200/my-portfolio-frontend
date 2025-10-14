"use client";

import { Experience } from "@/app/constants/experienceConstant";
import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";

interface ExperienceComponentProps { experienceDataList: Experience[]; }

const containerStagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } } };
const cardIn: Variants = { hidden: { opacity: 0, y: 28, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };
const itemIn: Variants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } };
const dotIn: Variants = { hidden: { scale: 0.6, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } } };

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({ experienceDataList }) => {
  return (
    <div className="my-[10%] lg:my-[5%] flex flex-col justify-center font-poppins">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        variants={containerStagger}
        className="grid grid-cols-1 gap-8 md:gap-10 px-4 sm:px-6"
      >
        {experienceDataList.map((experienceData, idx) => (
          <GlowingCard key={`${experienceData.company}-${idx}`} variants={cardIn}>
            {/* Header */}
            <div className="flex items-center gap-4">
              <motion.div aria-hidden variants={itemIn}
                className="flex-none grid place-items-center h-12 w-12 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
                <span className="block h-7 w-7 [&>svg]:h-full [&>svg]:w-full [&>svg]:block [&>img]:h-full [&>img]:w-full [&>img]:object-contain leading-none">
                  {experienceData.logo}
                </span>
              </motion.div>
              <motion.div variants={itemIn} className="min-w-0">
                <h2 className="text-xl lg:text-3xl text-white font-semibold tracking-tight">{experienceData.company}</h2>
                <p className="text-gray-300/90 lg:text-lg">{experienceData.duration}</p>
              </motion.div>
            </div>

            {/* Timeline */}
            <div className="mt-6 lg:mt-7 pl-8 md:pl-6 relative">
              <div className="absolute left-3 md:left-1 top-0 h-full w-px bg-gradient-to-b from-white/25 via-white/10 to-transparent" aria-hidden />
              <ul className="space-y-6 lg:space-y-7">
                {experienceData.roles.map((role, rIdx) => (
                  <motion.li key={rIdx} variants={itemIn} className="relative flex items-start gap-x-4">
                    <motion.div variants={dotIn}
                      className="relative z-[1] mt-1.5 size-2.5 md:size-3.5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 ring-[1.5px] md:ring-2 ring-emerald-300/40 shadow-[0_0_0_2px_rgba(16,185,129,0.15)] md:shadow-[0_0_0_3px_rgba(16,185,129,0.15)]"
                      aria-hidden />
                    <div className="-translate-y-0.5">
                      <h3 className="text-base lg:text-2xl font-semibold text-white tracking-tight">{role.title}</h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm lg:text-base">
                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-gray-200/90">{role.employmentType}</span>
                        <span className="text-gray-400/90">{role.period}</span>
                        <span className="text-gray-300/90">{role.location}</span>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </GlowingCard>
        ))}
      </motion.div>
    </div>
  );
};

export default ExperienceComponent;

/* -------- Glowing Card (no styled-jsx, mobile-safe) -------- */
function GlowingCard({ children, variants }: { children: React.ReactNode; variants: Variants }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    // SSR + touch guard
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={onMove}
      variants={variants}
      className="group relative mx-auto w-full max-w-3xl rounded-2xl border border-white/10
                 bg-gradient-to-br from-white/5 to-transparent p-5 lg:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md
                 ring-1 ring-inset ring-white/10 transition-transform duration-300 will-change-transform
                 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.6)] overflow-hidden isolate transform-gpu"
    >
      {/* outer neon glow — responsive spread */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 rounded-[28px] glow-inset blur-xl sm:blur-2xl opacity-70 md:opacity-90 animate-spin-slow"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(16,185,129,0.25), rgba(59,130,246,0.18), rgba(168,85,247,0.18), rgba(16,185,129,0.25))",
          filter: "saturate(120%)",
        }}
      />
      {/* breathing ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl animate-pulse-soft"
        style={{ boxShadow: "0 0 80px 18px rgba(16,185,129,0.08), 0 0 120px 28px rgba(59,130,246,0.06)" }}
      />
      {/* spotlight (centered on touch/SSR) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(34,197,94,0.12), transparent 42%)",
          transition: "background 120ms ease-out",
        }}
      />
      {/* clean edge ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]"
      />
      {children}
    </motion.article>
  );
}
