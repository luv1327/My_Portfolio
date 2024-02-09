import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Bachelor In Commerce",
    name: "University Of Mumbai",
    description: "B.Com graduate, 2020",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Software Engineer",
    name: "Scaler",
    description:
      "Data Structures, Algorithms, SQL, and Low-Level Design (LLD), honing problem-solving skills and fostering a deep understanding of algorithmic complexities.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Engineer",
    name: "Myzow Solutions LLP",
    description:
      "Full-stack developer using React, Java, Spring Boot, Node, and MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "JavaScript",
  "TypeScript",
  "Spring Boot",
  "MySQL",
  "MongoDB",
  "React",
  "AWS",
  "Redis",
  "Kafka",
  "Microservices",
  "System Design",
  "Distributed Systems",
  "Problem Solving",
  "Data Structures & Algorithms",
] as const;
