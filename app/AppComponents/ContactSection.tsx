"use client";

import React, { useMemo, useState } from "react";
import PrimaryHeading from "./Home/PrimaryHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendQuery } from "../services/contactService";
import { ToastContainer, toast } from "react-toastify";
import { Loader } from "./Loader";
import { InlineWidget } from "react-calendly";
import { motion, Variants, useReducedMotion } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const emailOk = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const disabled = useMemo(
    () => loading || !name.trim() || !emailOk(email) || !message.trim(),
    [loading, name, email, message]
  );

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!name.trim() || !emailOk(email) || !message.trim()) {
      toast.error("Please fill all fields with a valid email.");
      return;
    }
    try {
      setLoading(true);
      const response = await sendQuery({ name, email, message });
      if (response?.ack) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Oh snap! Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" theme="dark" />
      <div id="contact-section" className="flex flex-col items-center justify-center">
        <PrimaryHeading textCentered firstTitle="LET'S HAVE" secondTitle="A CHAT" />

        {/* Calendly block – bright tile so it pops on black */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          className="w-[92%] sm:w-[80%] lg:w-[60%] xl:w-[50%] mt-10"
        >
          <div className="relative isolate overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white">
            <InlineWidget
              url="https://calendly.com/grajdeep2000"
              styles={{
                height: "420px",
                overflow: "hidden",
                backgroundColor: "white",
                border: "none",
              }}
            />
          </div>
        </motion.div>

        {/* Contact form card with subtle emerald/cyan glow */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          className="relative font-poppins mt-12 mb-12 w-[92%] sm:w-[80%] md:w-[70%] lg:w-[55%] xl:w-[45%]"
        >
          {/* Halo behind the card */}
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-2xl blur-2xl opacity-70 md:opacity-85"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(22,163,74,.28), rgba(37,99,235,.22), rgba(22,163,74,.28))",
              animation: prefersReducedMotion ? undefined : "spinSlow 16s linear infinite",
              mixBlendMode: "screen",
            }}
          />
          {/* Soft inner glow */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
            style={{
              boxShadow:
                "0 0 110px 28px rgba(16,185,129,0.12), 0 0 120px 30px rgba(59,130,246,0.10)",
            }}
          />

          <motion.form
            onSubmit={handleSubmit}
            variants={item}
            className="relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/6 text-white backdrop-blur-xl px-5 sm:px-6 pt-5 pb-6"
          >
            {loading && (
              <div className="absolute inset-0 z-10 grid place-items-center rounded-2xl bg-black/40">
                <Loader />
              </div>
            )}

            {/* a11y labels (visually hidden) */}
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              className="h-12 rounded-xl bg-black/50 border-white/15 focus-visible:ring-emerald-400/60"
              required
            />

            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email"
              className="h-12 rounded-xl bg-black/50 border-white/15 focus-visible:ring-emerald-400/60"
              required
            />

            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="min-h-[120px] max-h-[260px] rounded-xl bg-black/50 border-white/15 focus-visible:ring-emerald-400/60"
              required
            />

            <motion.div variants={item} className="mt-2 flex justify-center">
              <Button
                disabled={disabled}
                onClick={() => handleSubmit()}
                type="submit"
                className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-3 font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.28)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </>
  );
};

export default ContactSection;
