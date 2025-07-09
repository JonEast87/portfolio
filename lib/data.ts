import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import trekbag from "@/public/trekbag.png";
import corpcomment from "@/public/corpcomment.png";
import ssg from "@/public/static_site_generator.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Thinkful",
    location: "New York, NY",
    description: "Software Engineering Immersion camp.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Arizona State University",
    location: "Tempe, AZ",
    description: "Bachelors of Science in Graphic Information Technology",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Static_Site_Generator",
    description:
      "An easy to use application that takes your Markdown file and translates it into a HTML/CSS static blog site.",
    tags: ["Python", "CSS", "HTML"],
    imageUrl: ssg,
    projectUrl: "https://github.com/JonEast87/static_site_generator.git"
  },
  {
    title: "Corp Comment",
    description:
      "A microblogging site that allows a user to easily leave a comment or review.",
    tags: ["React", "TypeScript", "Zustand", "CSS"],
    imageUrl: corpcomment,
    projectUrl: "https://corpcomment-jet.vercel.app/",
  },
  {
    title: "TrekBag",
    description: "The TrekBag is a no non-sense checklist that allows you to intuitively track whatever you need.",
    tags: ["React", "TypeScript", "Zustand", "CSS"],
    imageUrl: trekbag,
    projectUrl: "https://github.com/JonEast87/trekbag.git",
  },
] as const;

export const skillsData = [
  "CSS",
  "HTML",
  "Django",
  "Express",
  "Framer Motion",
  "Git",
  "GitBash",
  "GitHub",
  "JavaScript",
  "MongoDB",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Python",
  "React",
  "Ruby",
  "Ruby on Rails",
  "Tailwind",
  "TypeScript",
] as const;
