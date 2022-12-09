import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Spline from "@splinetool/react-spline";
import "../src/styles/DownloadHover.css";
import { GiBarbedArrow } from "react-icons/gi";
import { motion as m } from "framer-motion";
import { headingAnimate1, headingAnimate2, textAnimate } from "./animation";

const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  const handleTheme = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <section
      id="home"
      className="bg-home-mob-l dark:bg-home-mob-d sm:bg-home-desk-l dark:bg-home-desk-d w-full h-screen lg:bg-center bg-no-repeat bg-cover relative"
    >
      <Nav theme={theme} handleTheme={handleTheme} />

      <div className="flex items-center flex-col pb-[5rem] justify-center h-full w-full">
        <div className="flex items-center md:justify-center gap-16 md:w-full md:pl-2">
          <m.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="flex flex-col items-center text-center md:text-left md:items-start justify-center md:ml-8"
          >
            <div className="text-[3.1rem] font-rassain text-center md:text-left  leading-snug lg:leading-tight lg:mt-8">
              <m.p variants={headingAnimate1} className="lg:text-[4rem]">
                Hey I
                <span className="font-akaya tracking-wider ml-[5px]">'</span>m
              </m.p>

              <m.p
                variants={headingAnimate2}
                className="lg:text-[4rem] lg:text-orange-d"
              >
                Farves Safiyudeen
              </m.p>
            </div>

            <m.p
              variants={textAnimate}
              className="font-akaya text-xl lg:mt-1 md:text-2xl"
            >
              I am a Creative{" "}
              <span className="lg:text-orange-d">Frontend Developer</span> who
              crafts <br /> stunning professional web things.
            </m.p>

            <m.div
              variants={textAnimate}
              className="button-container-1 font-akaya text-xl bg-background-color rounded mt-4 lg:mt-5 mx-auto md:mx-0"
            >
              <span className="mas text-text-color px-4 py-2">Download CV</span>

              <a
                href="../src/assets/Resume.pdf"
                id="work"
                type="button"
                name="Hover"
                className="px-4 py-1 rounded bg-orange-d button"
                download
              >
                Download CV
              </a>
            </m.div>
          </m.div>

          <div className="hidden md:block">
            {theme === "light" ? (
              <Spline scene="https://prod.spline.design/VhZzK26CXr5fNJg6/scene.splinecode" />
            ) : (
              <Spline scene="https://prod.spline.design/oOEpnsEEeq4bTkDy/scene.splinecode" />
            )}
          </div>
        </div>
      </div>

      <div className="absolute -right-[3rem] bottom-20 rotate-90 flex items-center gap-2 text-[1.1rem]">
        <p>SCROLL DOWN</p>

        <GiBarbedArrow className="-rotate-45" />
      </div>
    </section>
  );
};

export default Home;
