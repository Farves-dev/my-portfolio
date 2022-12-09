import React from "react";
import { motion as m } from "framer-motion";
import { textAnimate } from "./animation";

const About = () => {
  return (
    <section
      id="about"
      className="bg-about-mob-l dark:bg-about-mob-d sm:bg-about-desk-l dark:sm:bg-about-desk-d w-full h-screen bg-no-repeat bg-cover flex items-center justify-center"
    >
      <m.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="px-4 max-w-[25rem] sm:max-w-[27rem] lg:max-w-[32rem] flex flex-col items-center gap-4 lg:gap-6 "
      >
        <m.h2 variants={textAnimate} className="text-3xl sm:text-4xl lg:text-5xl head-bounce">
          ABOUT ME
        </m.h2>

        <m.p variants={textAnimate} className="text-center text-xl sm:text-2xl lg:text-3xl">
          My name is Farves Safiyudeen. I'm a creative front-end web developer
          focused on creating stunning, functional, scalable, user friendly and
          modern websites and web applications.I am passionate about providing
          solutions to users by building accessible products.
        </m.p>
      </m.div>
    </section>
  );
};

export default About;
