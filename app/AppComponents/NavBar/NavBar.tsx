"use client";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import "./NavBar.css";
import { NAV_MENU_LIST } from "@/app/constants/navBarConstants";
import { motion, Variants, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function NavBar() {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = React.useState<string>("home");

  // Optional: observe sections and highlight active icon on scroll
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const ids = [
      { id: "home", el: document.body }, // fallback
      { id: "project", el: document.getElementById("project-section") },
      { id: "tech", el: document.getElementById("tech-skills-section") },
      { id: "exp", el: document.getElementById("exp-section") },
      { id: "contact", el: document.getElementById("contact-section") },
    ].filter((x) => x.el) as { id: string; el: Element }[];

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const match = ids.find((x) => x.el === visible.target);
          if (match) setActive(match.id);
        }
      },
      { root: null, threshold: [0.25, 0.5, 0.75] }
    );

    ids.forEach(({ el }) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollWithOffset = (el: Element) => {
    const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY;
    const OFFSET = 80; // nudge so section title isn’t flush to top
    window.scrollTo({ top: Math.max(y - OFFSET, 0), behavior: "smooth" });
  };

  const handleClick = (id: string) => {
    if (id === "home") {
      router.push("/");
      setActive("home");
      return;
    }
    // map your known ids -> dom ids
    const map: Record<string, string> = {
      tech: "tech-skills-section",
      exp: "exp-section",
      contact: "contact-section",
      project: "project-section",
    };
    const domId = map[id];
    const section = domId ? document.getElementById(domId) : null;
    if (section) {
      scrollWithOffset(section);
      setActive(id);
    }
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="font-poppins"
    >
      <Menubar className="navBar_container">
        {/* Halo behind the whole bar (mobile-safe, subtle) */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-[14px] blur-xl opacity-70 md:opacity-85"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(22,163,74,.22), rgba(37,99,235,.18), rgba(22,163,74,.22))",
            animation: prefersReducedMotion ? undefined : "spinSlow 18s linear infinite",
            mixBlendMode: "screen",
          }}
        />
        {NAV_MENU_LIST.map((item) => {
          const isActive = active === item.id;
          return (
            <MenubarMenu key={item.id}>
              <MenubarTrigger
                className={[
                  "nav_btn",
                  isActive ? "nav_btn--active" : "nav_btn--idle",
                ].join(" ")}
                onClick={() => handleClick(item.id)}
                aria-label={item.label ?? item.id}
              >
                <span className="nav_icon">{item.icon}</span>
              </MenubarTrigger>
            </MenubarMenu>
          );
        })}
      </Menubar>
    </motion.div>
  );
}
