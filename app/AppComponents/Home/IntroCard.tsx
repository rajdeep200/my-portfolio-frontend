"use client";

import React from "react";
import Image from "next/image";
import RG_Photo from "../../../assets/RG_Photo2.jpg";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SOCIAL_MEDIA_LIST } from "@/app/constants/introCardSocialIconList";
import { motion, Variants, useReducedMotion } from "framer-motion";

const cardIn: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const IntroCard = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={cardIn}
      className="xl:w-[40%] xl:flex xl:flex-col xl:justify-center xl:items-end font-poppins"
    >
      <article
        className="
          group relative w-[92%] md:w-[70%] lg:w-[55%] xl:w-[55%]
          mx-auto mt-6 lg:mt-[8rem] xl:mt-[5.5rem] xl:mx-0
          isolate overflow-hidden rounded-3xl transform-gpu
        "
      >
        {/* subtle emerald/cyan halo */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-7 md:-inset-8 -z-10 rounded-[30px] blur-2xl opacity-70 md:opacity-85 mix-blend-screen"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(22,163,74,.28), rgba(37,99,235,.22), rgba(22,163,74,.28))",
            animation: prefersReducedMotion ? undefined : "spinSlow 16s linear infinite",
          }}
        />
        {/* inner glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-[30px]"
          style={{
            boxShadow:
              "0 0 110px 28px rgba(16,185,129,0.12), 0 0 120px 30px rgba(59,130,246,0.10)",
          }}
        />
        {/* edge ring */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-[30px] ring-1 ring-white/14"
        />

        <Card
          className="
            relative rounded-3xl overflow-hidden
            border border-white/12
            bg-gradient-to-br from-white/14 via-white/10 to-white/8
            backdrop-blur-xl text-white
            shadow-[0_15px_50px_rgba(0,0,0,0.55)]
          "
        >
          {/* top accent line (subtle, on-brand) */}
          <div
            aria-hidden
            className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400/70 via-emerald-300/50 to-cyan-400/70"
          />

          <CardHeader className="py-8 px-6">
            {/* photo with clean frame + gentle glow */}
            <div className="relative mx-auto w-[85%] sm:w-[78%]">
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-2 -z-10 rounded-[18px] blur-xl opacity-50"
                style={{
                  background:
                    "radial-gradient(200px 140px at 10% -10%, rgba(16,185,129,.18), transparent 60%)",
                }}
              />
              <Image
                src={RG_Photo}
                alt="Rajdeep Ghosh portrait"
                className="aspect-square w-full object-cover rounded-[15px] bg-zinc-900 ring-1 ring-white/15 shadow-[0_20px_60px_rgba(0,0,0,.55)]"
                height={250}
                width={250}
                priority
              />
            </div>
          </CardHeader>

          <CardContent className="mx-auto w-full max-w-xl">
            <div className="flex flex-col items-center gap-5">
              <div className="text-center">
                <p className="text-base sm:text-lg font-medium text-white/80">Hi 👋🏼! I am</p>
                <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Rajdeep Ghosh
                </h2>
              </div>

              <p className="text-center text-[14px] sm:text-[15px] leading-7 text-zinc-100/95 max-w-[36ch]">
                A passionate Software Developer dedicated to crafting cutting-edge
                solutions that drive innovation and impact.
              </p>

              {/* social icons with tidy hover rings */}
              <div className="flex justify-center items-center gap-4 sm:gap-5">
                {SOCIAL_MEDIA_LIST.map((item) => (
                  <a
                    key={item.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      cursor-pointer grid place-items-center size-10 rounded-full
                      bg-white/8 ring-1 ring-white/10 text-white
                      transition-all duration-300
                      hover:translate-y-[-2px] hover:bg-white/12 hover:ring-white/20
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                    "
                    aria-label={"social link"}
                  >
                    <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:block">{item.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </article>
    </motion.div>
  );
};

export default IntroCard;
