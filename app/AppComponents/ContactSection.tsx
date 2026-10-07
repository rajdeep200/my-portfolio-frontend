"use client";

/* Calendly + form markup is commented out below, so their imports/handlers are
   temporarily unused. Remove this line when the block is re-enabled. */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendQuery } from "../services/contactService";
import { ToastContainer, toast } from "react-toastify";
import { Loader } from "./Loader";
import { InlineWidget } from "react-calendly";

const emailOk = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
      <section className="section contact" id="contact">
        {/* No `.reveal` here: as the last section it can never scroll far enough
            for the view()-timeline fade to finish, so it would stay dimmed. */}
        <div className="section-inner">
          <p className="section-label">06 — Contact</p>
          <h2 className="section-title">Let&apos;s work together</h2>
          <p className="contact-body">
            Based in Kolkata, India — working with teams across the US, UK, EU,
            Australia, and the Middle East. Open to freelance and contract work.
          </p>
          <div className="contact-actions">
            <a
              href="mailto:grajdeep2000@gmail.com"
              className="btn btn-primary btn-lg"
            >
              grajdeep2000@gmail.com
            </a>
          </div>
          <div className="social-row">
            <a
              href="https://github.com/rajdeep200"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/grajdeep2000"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Calendly + contact form temporarily disabled. Uncomment this block
              (down to the matching closing marker) to bring them back.
          <div className="contact-panels">
            Calendly block
            <div className="contact-card contact-calendly">
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

            Contact form
            <form
              onSubmit={handleSubmit}
              className="contact-card contact-form"
            >
              {loading && (
                <div className="contact-loading">
                  <Loader />
                </div>
              )}

              a11y labels (visually hidden)
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="contact-field"
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
                className="contact-field"
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
                className="contact-field"
                required
              />

              <Button
                disabled={disabled}
                onClick={() => handleSubmit()}
                type="submit"
                className="contact-submit"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          end of disabled block */}
        </div>
      </section>
    </>
  );
};

export default ContactSection;
