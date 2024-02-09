import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
import roadbeeImage from "@/public/roadbeeImage.png";
import animalSocialImage from "@/public/animalSocialImage.png";

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
    title: "Software Engineering",
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
      "Full-stack developer using React, Java, Spring Boot, and MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Animal Social",
    description:
      "Revamped Animal Social with improved backend and user-friendly dashboards.",
    tags: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "React",
      "Zustand",
      "MUI",
    ],
    imageUrl: animalSocialImage,
  },
  {
    title: "Roadbee",
    description:
      "Backend development for Roadbee's ecommerce section, optimizing functionality and ensuring a superior online shopping experience.",
    tags: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    imageUrl: roadbeeImage,
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
