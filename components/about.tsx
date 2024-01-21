"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After finishing my bootcamp at{" "}
        <span className="font-medium">Thinkful</span> in{" "}
        <span className="font-bold">Software Engineering</span>, I decided to
        return back to <span className="font-medium">ASU</span> to complete my
        degree in{" "}
        <span className="font-bold">Graphic Information Technology</span>. I
        have been dedicated to learning multiple languages such as{" "}
        <span className="italic">JavaScript/TypeScript, Python and Java</span>{" "}
        used in web development. I am eager to join a professional team to begin
        my foray into the tech world.
      </p>
      <p className="mb-3">
        I grew up with a computer as my babysitter, I played a lot of computer
        games that kept me occupied. Programming was always interesting to me
        but something I felt was a little too heady for me. It wasn't until I
        was pushed by a family member to give at least one tutorial a try in
        JavaScript that I realized that I can certainly{" "}
        <span className="underline">do this as a career</span>.
      </p>
    </motion.section>
  );
}
