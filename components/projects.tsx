// removed use client here as I am seperating project and projects from each other

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
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
