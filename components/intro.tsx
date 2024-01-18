"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import jon from "@/public/jon.jpg";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={jon}
              alt="Jonathan portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🙌
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2x1 font-medium !leading-[1.5] sm:text-4x1"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          I am a full stack developer specializing in JavaScript/TypeScript. I
          am familiar with a wide range of JS tech stacks such as React, Express
          and Next.
        </span>{" "}
        <span className="font-bold">
          I have utilized both JavaScript and backend technologies such as
          MongoDB and PostgreSQL to create full stack works.
        </span>
      </motion.p>

      <div></div>
    </section>
  );
}
