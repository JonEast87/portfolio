"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After finishing my bootcamp at Thinkful I decided to return back to ASU
        to complete my degree in Graphic Information Technology. I have been
        dedicated to learning multiple languages used in web development and am
        eager to join a professional team to begin my foray into the tech world.
      </p>
      <p className="mb-3">
        I grew up with a computer as my babysitter, I played a lot of computer
        games that kept me occupied. Programming was always interesting to me
        but something I felt was a little too heady for me. It wasn't until I
        was pushed by a family member to give at least one tutorial a try in
        JavaScript that I realized that I can certaily do this as a career.
      </p>
    </motion.section>
  );
}