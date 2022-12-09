import React, { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const App = () => {
  const [loading, setLoading] = useState(true);

  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 3000);
  }

  return (
    <>
      <div className="dark:bg-background-color transition-all duration-300 selection:bg-black dark:selection:bg-white selection:text-orange-d">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
