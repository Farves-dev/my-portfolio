import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "../src/styles/SocialHover.css";

const Footer = () => {
  return (
    <footer className="w-full h-full flex-col sm:flex-row border-t border-text-color flex items-center justify-between text-xl gap-4 p-4">
      <div className="flex flex-col items-center sm:items-start gap-4">
        <p className="text-3xl sm:text-[1.65rem] md:text-3xl">
          I'm always up for a chat
        </p>
        <p>farvessafiyudeen@gmail11.com</p>
      </div>

      <a
        href="#home"
        className="text-3xl bg-orange-d rounded-full p-1 head-bounce"
      >
        <AiOutlineArrowUp />
      </a>

      <div className="flex flex-col items-center sm:items-end gap-4">
        <div className="flex gap-4 text-4xl sm:text-3xl md:text-4xl">
          <a
            href="https://github.com/Farves-dev"
            target="_blank"
            className="bounce"
          >
            <FaGithubSquare />
          </a>

          <a
            href="https://www.linkedin.com/in/farves-safiyudeen-50300225a/"
            target="_blank"
            className="bounce"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="uppercase">@2022 farsa all rights reserves</p>
      </div>
    </footer>
  );
};

export default Footer;
