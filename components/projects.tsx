"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { projectsData } from "@/lib/data";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          // Creating fragment so that the key is not stored along with the entry itself
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

// Because the data object was already defined in data.ts using the typeof structure of the
// objects will implicity declare the needed types
type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative">
      <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10">
        <h3 className="text-2x1 font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt="Jonathan portrait"
        quality="95"
        className="absolute top-8 -right-40 w-[27.25rem]"
      />
    </section>
  );
}
