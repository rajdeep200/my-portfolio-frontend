"use client";

import React, { useState } from "react";
import PrimaryHeading from "./Home/PrimaryHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendQuery } from "../services/contactService";
import { ToastContainer, toast } from "react-toastify";
import { Loader } from "./Loader";
import { InlineWidget } from "react-calendly";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name.length || !email.length || !message.length) {
        toast.error("Please fill all the fields");
        return;
      }
      const response = await sendQuery({ name, email, message });
      if (response.ack) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Oh snap! Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong...");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const el = document.getElementById("__next");
  console.log("element", el);
  return (
    <>
      <ToastContainer />
      <div
        id="contact-section"
        className="flex flex-col justify-center items-center"
      >
        <PrimaryHeading
          textCentered
          firstTitle="LET's HAVE"
          secondTitle="A CHAT"
        />
        <InlineWidget
          styles={{
            marginTop: "50px",
            overflow: "hidden",
            maxHeight: "400px",
            backgroundColor: "white",
            border: "none",
            borderRadius: "10px",
            boxShadow: "0px 0px 30px white",
          }}
          url="https://calendly.com/grajdeep2000"
        />
        <div className="relative font-poppins shadow-md shadow-zinc-400 mt-[8%] mb-[8%] flex flex-col justify-center items-center gap-y-6 px-3 pt-3 pb-6 rounded-xl bg-zinc-900 text-white md:mx-auto w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
          {loading && <Loader />}
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            className="py-3 h-full"
            required
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className="py-3 h-full"
            required
          />
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="py-3 h-full"
            required
          />
          <Button
            onClick={handleSubmit}
            type="submit"
            className="shadow-md shadow-zinc-400 bg-zinc-800"
          >
            Send Message
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
