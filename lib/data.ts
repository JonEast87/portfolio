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
      "Make your blog using Markdown stylings to translate it easily into HTML.",
    tags: ["Python", "CSS", "HTML"],
    imageUrl: ssg,
  },
  {
    title: "Corp Comment",
    description:
      "Love a company? Leave a comment for an easy to use review system!",
    tags: ["React", "TypeScript", "Zustand", "CSS"],
    imageUrl: corpcomment,
  },
  {
    title: "TrekBag",
    description: "Never forget a thing with TrekBag!",
    tags: ["React", "TypeScript", "Zustand", "CSS"],
    imageUrl: trekbag,
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
