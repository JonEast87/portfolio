import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import reservation from "@/public/reservation-system.png";
import grubdash from "@/public/grubdash.png";
// import reactquiz from "@/public/react_quiz.png";
import trekbag from "@/public/trekbag.png";
import corpcomment from "@/public/corpcomment.png";

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
    description: "Backelors of Science in Graphic Information Technology",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2024",
  },
] as const;

export const projectsData = [
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
  // {
  //   title: "React Quiz",
  //   description:
  //     "Simple quiz fetching from opendb.com to display a custom quiz size.",
  //   tags: ["React", "TypeScript"],
  //   imageUrl: reactquiz,
  // },
  {
    title: "Reservation System",
    description: "Full stack reservation and table management system.",
    tags: ["React", "Node", "Express", "Knex", "PostgreSQL"],
    imageUrl: reservation,
  },
  {
    title: "GrubDash",
    description: "Full stack food to cart application.",
    tags: ["React", "Node", "Express", "Knex"],
    imageUrl: grubdash,
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
