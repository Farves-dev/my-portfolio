import React from "react";
import { CgArrowLongUpC, CgArrowLongDownC } from "react-icons/cg";
import "../src/styles/SkillHover.css";
import { motion as m } from "framer-motion";
import { textAnimate } from "./animation";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full relative h-full lg:h-screen flex items-start md:items-center mt-10 md:mt-40 justify-center"
    >
      <m.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="flex  flex-col items-center gap-14 sm:gap-20"
      >
        <m.h2
          variants={textAnimate}
          className="text-3xl sm:text-4xl lg:text-5xl head-bounce"
        >
          SKILLS & TOOLS
        </m.h2>

        <m.div
          variants={textAnimate}
          className="flex flex-wrap gap-14 sm:gap-20 items-center justify-center px-6"
        >
          <div className="relative">
            <div className="trapdoor">
              <div className="top door"></div>

              <div className="bottom door"></div>

              <p className="text">HTML</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door css"></div>

              <div className="bottom door css"></div>

              <p className="text">CSS</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door js"></div>

              <div className="bottom door js"></div>

              <p className="text">JavaScript</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door react"></div>

              <div className="bottom door react"></div>

              <p className="text">React JS</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door next"></div>

              <div className="bottom door next"></div>

              <p className="text">Next JS</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door sass"></div>

              <div className="bottom door sass"></div>

              <p className="text">SASS</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door tail"></div>

              <div className="bottom door tail"></div>

              <p className="text">Tailwind CSS</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door styled"></div>

              <div className="bottom door styled"></div>

              <p className="text">Styled Components</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door redux"></div>

              <div className="bottom door redux"></div>

              <p className="text">Redux</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door git"></div>

              <div className="bottom door git"></div>

              <p className="text">Git & Github</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door npm"></div>

              <div className="bottom door npm"></div>

              <p className="text">npm</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door api"></div>

              <div className="bottom door api"></div>

              <p className="text">Rest APIs</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door res"></div>

              <div className="bottom door res"></div>

              <p className="text">Responsive Design</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door vite"></div>

              <div className="bottom door vite"></div>

              <p className="text">Vite</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door agile"></div>

              <div className="bottom door agile"></div>

              <p className="text">Agile Methodology</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door illu"></div>

              <div className="bottom door illu"></div>

              <p className="text">Adobe Illustrator</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door photo"></div>

              <div className="bottom door photo"></div>

              <p className="text">Adobe Photoshop</p>
            </div>
          </div>

          <div className="relative">
            <div className="trapdoor">
              <div className="top door figma"></div>

              <div className="bottom door figma"></div>

              <p className="text">Figma</p>
            </div>
          </div>
        </m.div>
      </m.div>
      <div className="flex items-center gap-4 rotate-90 absolute top-96 -right-36">
        <CgArrowLongDownC className="rotate-90" />
        <p className="whitespace-nowrap uppercase">
          Hover on them to know their name
        </p>
        <CgArrowLongUpC className="rotate-90" />
      </div>
    </section>
  );
};

export default Skills;
