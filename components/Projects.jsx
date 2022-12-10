import React from "react";
import "../src/styles/DownloadHover.css";
import { motion as m } from "framer-motion";
import { headingAnimate1, headingAnimate2, textAnimate } from "./animation";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full h-full flex-col flex items-center justify-center px-4 mt-16 gap-20 md:gap-0 md:mt-0"
    >
      <m.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="flex-col md:h-screen flex items-center h-full md:flex-row-reverse justify-center md:justify-between gap-14 xl:gap-20 "
      >
        <m.h3
          variants={textAnimate}
          className="md:hidden text-orange-d text-[1.65rem] md:mt-60 head-bounce lg:mt-0"
        >
          JUICE WORLD
        </m.h3>

        <m.div
          variants={textAnimate}
          className="bg-juice-light-mob dark:bg-juice-dark-mob md:bg-juice-light-desk dark:md:bg-juice-dark-desk w-[160px] h-[360px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[400px] xl:w-[550px] xl:h-[450px] bg-contain bg-no-repeat bg-center -my-7 md:mt-0"
        />

        <m.div className="text-center flex flex-col gap-6 lg:gap-8 max-w-[23rem] lg:max-w-[26rem] text-xl lg:text-[1.4rem]">
          <m.h3
            variants={textAnimate}
            className="hidden md:block text-[1.65rem] lg:text-3xl text-orange-d head-bounce md:-mb-2 lg:-mb-4"
          >
            JUICE WORLD
          </m.h3>

          <m.p variants={textAnimate} className="md:text-justify">
            Juice World is an amazing fresh juice ordering web app. You can get
            different variety of fresh juices by ordering from this app.
            You can pay online via the stripe payment method or you can pay after
            receiving your energetic fresh juice on delivery.
          </m.p>

          <m.h4
            variants={textAnimate}
            className="text-orange-d text-[1.35rem] lg:text-2xl md:-mb-2 lg:-mb-4"
          >
            Technologies Used
          </m.h4>

          <m.ul
            variants={textAnimate}
            className="marker:text-orange-d list-inside list-disc flex flex-wrap gap-2 items-center justify-center md:justify-start"
          >
            <li>React JS</li>
            <li>Next JS</li>
            <li>Stripe</li>
            <li>Zustand</li>
            <li>Sanity</li>
            <li>CSS Modules</li>
            <li>Vite</li>
          </m.ul>

          <div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 xl:gap-16 -mt-4"
          >
            <m.div
              variants={headingAnimate1}
              className="button-container-1 font-akaya text-xl bg-background-color rounded mt-4 lg:mt-5 mx-auto md:mx-0"
            >
              <span className="mas px-4 py-2">Live</span>

              <a
                href="http://juiceworld.ga"
                target="_blank"
                id="work"
                type="button"
                name="Hover"
                className="px-4 py-1 rounded bg-orange-d button"
              >
                Live
              </a>
            </m.div>

            <m.div
              variants={headingAnimate2}
              className="button-container-1 font-akaya text-xl bg-background-color rounded mt-4 lg:mt-5 mx-auto md:mx-0"
            >
              <span className="mas px-4 py-2">Code</span>

              <a
                href="https://github.com/Farves-dev/juice-world"
                target="_blank"
                id="work"
                type="button"
                name="Hover"
                className="px-4 py-1 rounded bg-orange-d button"
              >
                Code
              </a>
            </m.div>
          </div>
        </m.div>
      </m.div>

      <m.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="flex-col h-screen flex items-center md:flex-row-reverse justify-center md:justify-between gap-14 xl:gap-20"
      >
        <m.h3
          variants={textAnimate}
          className="md:hidden text-orange-d text-[1.65rem] md:mt-60 lg:mt-0 head-bounce"
        >
          MUSICANA
        </m.h3>

        <m.div
          variants={textAnimate}
          className="bg-musicana-light-mob dark:bg-musicana-dark-mob md:bg-musicana-light-desk dark:md:bg-musicana-dark-desk w-[160px] h-[360px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[400px] xl:w-[550px] xl:h-[450px] bg-contain bg-no-repeat bg-center -my-7 md:mt-0"
        />

        <div className="text-center flex flex-col gap-6 lg:gap-8 max-w-[23rem] lg:max-w-[26rem] text-xl lg:text-[1.4rem]">
          <m.h3
            variants={textAnimate}
            className="hidden md:block text-[1.65rem] lg:text-3xl text-orange-d head-bounce md:-mb-2 lg:-mb-4"
          >
            MUSICANA
          </m.h3>

          <m.p variants={textAnimate} className="md:text-justify">
            Musicana is a music player web app. You can listen to any song you
            want. Also, you can choose between genres.
          </m.p>

          <m.h4
            variants={textAnimate}
            className="text-orange-d text-[1.35rem] lg:text-2xl md:-mb-2 lg:-mb-4"
          >
            Technologies Used
          </m.h4>

          <m.ul
            variants={textAnimate}
            className="marker:text-orange-d list-inside list-disc flex flex-wrap gap-2 items-center justify-center md:justify-start"
          >
            <li>React JS</li>
            <li>Rapid API</li>
            <li>Redux</li>
            <li>SASS</li>
            <li>Axios</li>
            <li>Vite</li>
            <li>Swiper</li>
            <li>React Router</li>
          </m.ul>

          <div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 xl:gap-16 -mt-4"
          >
            <m.div
              variants={headingAnimate1}
              className="button-container-1 font-akaya text-xl bg-background-color rounded mt-4 lg:mt-5 mx-auto md:mx-0"
            >
              <span className="mas px-4 py-2">Live</span>

              <a
                href="https://musicana1.netlify.app"
                target="_blank"
                id="work"
                type="button"
                name="Hover"
                className="px-4 py-1 rounded bg-orange-d button"
              >
                Live
              </a>
            </m.div>

            <m.div
              variants={headingAnimate2}
              className="button-container-1 font-akaya text-xl bg-background-color rounded mt-4 lg:mt-5 mx-auto md:mx-0"
            >
              <span className="mas px-4 py-2">Code</span>

              <a
                href="https://github.com/Farves-dev/musicana"
                target="_blank"
                id="work"
                type="button"
                name="Hover"
                className="px-4 py-1 rounded bg-orange-d button"
              >
                Code
              </a>
            </m.div>
          </div>
        </div>
      </m.div>

      <m.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="flex-col h-screen flex md:flex-row-reverse items-center justify-center md:justify-between gap-14 xl:gap-20"
      >
        <m.h3
          variants={textAnimate}
          className="md:hidden text-orange-d text-[1.65rem] md:mt-60 lg:mt-0 head-bounce"
        >
          GETIMAGE
        </m.h3>

        <m.div
          variants={textAnimate}
          className="bg-getimage-light-mob dark:bg-getimage-dark-mob md:bg-getimage-light-desk dark:md:bg-getimage-dark-desk w-[160px] h-[360px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[400px] xl:w-[550px] xl:h-[450px] bg-contain bg-no-repeat bg-center -my-7 md:mt-0"
        />

        <m.div className="text-center flex flex-col gap-6 lg:gap-8 max-w-[23rem] lg:max-w-[26rem] text-xl lg:text-[1.4rem]">
          <m.h3
            variants={textAnimate}
            className="hidden md:block text-[1.65rem] lg:text-3xl text-orange-d head-bounce md:-mb-2 lg:-mb-4"
          >
            GETIMAGE
          </m.h3>

          <m.p variants={textAnimate} className="md:text-justify">
            Getimage is a beautiful wallpaper web app to get amazing images. You
            can get different variety of quality images by searching.
          </m.p>

          <m.h4
            variants={textAnimate}
            className="text-orange-d text-[1.35rem] lg:text-2xl md:-mb-2 lg:-mb-4"
          >
            Technologies Used
          </m.h4>

          <m.ul
            variants={textAnimate}
            className="marker:text-orange-d list-inside list-disc flex flex-wrap gap-2 items-center justify-center md:justify-start"
          >
            <li>React JS</li>
            <li>React Router</li>
            <li>Pexels API</li>
            <li>CSS</li>
            <li>Vite</li>
          </m.ul>

          <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 xl:gap-16 -mt-4">
            <m.div
              variants={headingAnimate1}
              className="button-container-1 font-akaya text-xl bg-background-color rounded mt-4 lg:mt-5 mx-auto md:mx-0"
            >
              <span className="mas px-4 py-2">Live</span>

              <a
                href="https://getimage2.netlify.app"
                target="_blank"
                id="work"
                type="button"
                name="Hover"
                className="px-4 py-1 rounded bg-orange-d button"
              >
                Live
              </a>
            </m.div>

            <m.div
              variants={headingAnimate2}
              className="button-container-1 font-akaya text-xl bg-background-color rounded mt-4 lg:mt-5 mx-auto md:mx-0"
            >
              <span className="mas px-4 py-2">Code</span>

              <a
                href="https://github.com/Farves-dev/getimage"
                target="_blank"
                id="work"
                type="button"
                name="Hover"
                className="px-4 py-1 rounded bg-orange-d button"
              >
                Code
              </a>
            </m.div>
          </div>
        </m.div>
      </m.div>

      <m.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="flex-col h-screen flex  md:flex-row-reverse items-center justify-center md:justify-between gap-14 xl:gap-20"
      >
        <m.h3
          variants={textAnimate}
          className="md:hidden text-orange-d text-[1.65rem] md:mt-60 lg:mt-0 head-bounce"
        >
          DISNEY PLUS CLONE
        </m.h3>

        <m.div
          variants={textAnimate}
          className="bg-disney-light-mob dark:bg-disney-dark-mob md:bg-disney-light-desk dark:md:bg-disney-dark-desk w-[160px] h-[360px] md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[400px] xl:w-[550px] xl:h-[450px] bg-contain bg-no-repeat bg-center -my-7 md:mt-0"
        />

        <div className="text-center flex flex-col gap-6 lg:gap-8 max-w-[23rem] lg:max-w-[26rem] text-xl lg:text-[1.4rem]">
          <m.h3
            variants={textAnimate}
            className="hidden md:block text-[1.65rem] lg:text-3xl text-orange-d head-bounce md:-mb-2 lg:-mb-4"
          >
            DISNEY PLUS CLONE
          </m.h3>

          <m.p variants={textAnimate} className="md:text-justify">
            Disney plus clone is the cloning of the Disney plus web app using firebase.
          </m.p>

          <m.h4
            variants={textAnimate}
            className="text-orange-d text-[1.35rem] lg:text-2xl md:-mb-2 lg:-mb-4"
          >
            Technologies Used
          </m.h4>

          <m.ul
            variants={textAnimate}
            className="marker:text-orange-d list-inside list-disc flex flex-wrap gap-2 items-center justify-center md:justify-start"
          >
            <li>React JS</li>
            <li>Firebase</li>
            <li>Redux</li>
            <li>Styled Components</li>
            <li>Slick Carousel</li>
            <li>React Router</li>
            <li>Google Authentication</li>
          </m.ul>

          <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 xl:gap-16 -mt-4">
            <m.div
              variants={headingAnimate1}
              className="button-container-1 font-akaya text-xl bg-background-color rounded mt-4 lg:mt-5 mx-auto md:mx-0"
            >
              <span className="mas px-4 py-2">Live</span>

              <a
                href="https://disneyplusclone.ml"
                id="work"
                target="_blank"
                type="button"
                name="Hover"
                className="px-4 py-1 rounded bg-orange-d button"
              >
                Live
              </a>
            </m.div>

            <m.div
              variants={headingAnimate2}
              className="button-container-1 font-akaya text-xl bg-background-color rounded mt-4 lg:mt-5 mx-auto md:mx-0"
            >
              <span className="mas px-4 py-2">Code</span>

              <a
                href="https://github.com/Farves-dev/disney-plus-clone"
                target="_blank"
                id="work"
                type="button"
                name="Hover"
                className="px-4 py-1 rounded bg-orange-d button"
              >
                Code
              </a>
            </m.div>
          </div>
        </div>
      </m.div>
    </section>
  );
};

export default Projects;
