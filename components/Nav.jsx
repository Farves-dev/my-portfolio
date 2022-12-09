import React, { useEffect, useState } from "react";
import "../src/styles/MobNav.css";
import "../src/styles/MenuHover.css";
import { HiSun, HiMoon } from "react-icons/hi";

const Nav = ({ theme, handleTheme }) => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header className="">
      <nav
        className={
          color
            ? "hidden sm:flex items-center justify-between px-4 fixed top-0 z-10 w-full right-0 py-4 nav-bg"
            : "hidden sm:flex items-center justify-between px-4 fixed top-0 z-10 w-full right-0 py-4"
        }
      >
        <div className="font-choco text-3xl lg:text-4xl text-text-color">
          <a href="/">FarSa</a>
        </div>

        <div className="flex items-center justify-between gap-11 text-xl lg:text-2xl">
          <ul className="flex items-center justify-between gap-11">
            <li>
              <a href="#home" className="inverted-1">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="inverted-1">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="inverted-1">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="inverted-1">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="inverted-1">
                Contact
              </a>
            </li>
          </ul>
          {theme === "light" ? (
            <HiSun
              onClick={handleTheme}
              className="cursor-pointer hover:text-orange-d transition duration-200"
            />
          ) : (
            <HiMoon
              onClick={handleTheme}
              className="cursor-pointer hover:text-orange-d transition duration-200"
            />
          )}
        </div>
      </nav>

      {/* MOBILE-NAV */}

      <div
        className={
          color
            ? "block sm:hidden w-full fixed top-0 z-10 pb-4 nav-bg"
            : "block sm:hidden w-full fixed top-0 z-10 pb-4"
        }
      >
        <div className="font-choco text-3xl text-text-color mt-4 ml-4">
          <a href="/">FarSa</a>
        </div>

        <input
          className="menu-icon"
          type="checkbox"
          id="menu-icon"
          name="menu-icon"
        />

        <label htmlFor="menu-icon"></label>

        <nav className="nav">
          <ul className="pt-5">
            {theme === "light" ? (
              <HiSun
                onClick={handleTheme}
                className="sun-icon hover:text-white dark:hover:text-black transition duration-300"
              />
            ) : (
              <HiMoon
                onClick={handleTheme}
                className="sun-icon hover:text-white dark:hover:text-black transition duration-300"
              />
            )}

            <li>
              <a href="/" className="inverted-3">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="inverted-3">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="inverted-3">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="inverted-3">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="inverted-3">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
