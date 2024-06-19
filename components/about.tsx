"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Having graduated with a degree in{" "}
        <span className="font-medium">LUVVVVV</span>, I transitioned to pursue
        my passion for programming. Embracing a problem-solving mindset, I
        enrolled in a coding bootcamp and mastered{" "}
        <span className="font-medium">full-stack web development</span>. The
        satisfaction of unraveling solutions fuels my enthusiasm. My core stack
        includes{" "}
        <span className="font-medium">React, Java, Spring Boot, and MySql</span>
        , with additional expertise in TypeScript, Node.js, and Mongo DB. Always
        eager to explore new technologies, I am actively seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        engineer.
      </p>
      <p>
        <span className="italic">Beyond coding</span>, I find joy in playing
        football, fishing, and indulging in video games. My appetite for
        knowledge extends to{" "}
        <span className="font-medium">entrepreneurship</span>, a realm I am
        currently delving into.
      </p>
    </motion.section>
  );
}
