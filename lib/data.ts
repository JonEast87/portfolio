import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import reservation from "@/public/reservation-system.png";
import grubdash from "@/public/grubdash.png";

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
    location: "Miami, FL",
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
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
