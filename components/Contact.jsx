import React, { useRef } from "react";
import "../src/styles/Input.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion as m } from "framer-motion";
import { headingAnimate1, headingAnimate2, textAnimate } from "./animation";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yyblnyi",
        "template_nbp3yu6",
        form.current,
        "tJ9Xk0dzfOzLIaKt5"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            "Your email has been sent. Thank you for contacting me."
          );
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong. Please try again");
        }
      );
  };
  return (
    <section id="contact" className="w-full h-screen mt-16">
      <m.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-center h-full gap-8 md:gap-16 lg:gap-24"
      >
        <m.div variants={textAnimate} className="bg-contact-desk-l dark:bg-contact-desk-d bg-no-repeat bg-contain w-[350px] h-[200px] md:w-[400px] md:h-[250px] lg:w-[450px] lg:h-[300px] xl:w-[500px] xl:h-[350px]  flex flex-col items-start md:items-center justify-center text-left ml-8 text-left">
          <h2 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] xl:text-[2.8rem] uppercase pl-8 md:pl-0 mt-4 md:mt-12 xl:mt-6">
            Send me a message!
          </h2>

          <p className="text-xl lg:text-2xl xl:text-[1.7rem] max-w-[250px] lg:max-w-[280px] xl:max-w-[320px] pl-8 md:pl-0 md:mr-20 lg:mr-24 md:mb-12">
            Got a question or proposal, or just want to say hello? Shoot me...
          </p>
        </m.div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center gap-5 lg:gap-8 text-xl"
        >
          <m.div variants={headingAnimate1} className="input-box lg:w-[340px] xl:w-[400px]">
            <input
              type="text"
              name="user_name"
              required
              className="focus:border-orange-d "
            />

            <span>Name</span>
          </m.div>

          <m.div variants={headingAnimate2} className="input-box lg:w-[340px] xl:w-[400px]">
            <input
              type="user_email"
              name="name"
              required
              className="focus:border-orange-d "
            />

            <span>Email</span>
          </m.div>

          <m.div variants={headingAnimate1} className="input-box lg:w-[340px] xl:w-[400px] ">
            <textarea
              type="text"
              name="message"
              required
              rows={5}
              className="focus:border-orange-d p-3"
            />

            <span>Message</span>
          </m.div>

          <m.div variants={textAnimate} className="button-container-1 font-akaya text-xl bg-background-color rounded">
            <span className="mas py-2">Send</span>

            <button
              id="work"
              type="submit"
              name="Hover"
              className="py-1 rounded bg-orange-d button"
            >
              Send
            </button>
          </m.div>
        </form>
      </m.div>
      <Toaster position="bottom-center" />
    </section>
  );
};

export default Contact;
