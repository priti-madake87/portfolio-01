import React, { useContext, useEffect } from "react";
import "./about.css";
import { themeContext } from "../../Context";
import Svg1 from "./Svg";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  // context
  // ok
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="services"
      id="services"
      data-aos-duration="5000"
      data-aos-delay="600"
    >
      <span
        style={{ color: darkMode ? "white" : "" }}
        className="about_me anim"
        data-aos="flip-left"
      >
        {" "}
        All{" "}
        <span data-aos="flip-left" className="me">
          About
        </span>{" "}
        Me
      </span>
      <div className="grid_about ">
        <div className="awesome " data-aos="slide-right">
          <ul className="about_article anim">
            <li>
              Hello! My name is Pradip Shelke, and I enjoy crafting innovative
              web applications that enhance user experience.
            </li>
            <br />
            <li>
              I'm a passionate Developer, proficient in the MERN stack, with
              strong problem-solving skills, team management experience, and an
              eagerness to learn and adapt to new technologies.
            </li>
            <br />
            <li>
              My journey into web development began during my college days,
              where I built a crowdsourced city improvement platform. That
              project sparked my interest in creating transparent and impactful
              applications.
            </li>
            <br />
            <li>
              As I grow and flourish as a Developer, I am driven by my curiosity
              to explore new advancements, like generative AI and teachable
              machine models.
            </li>
            <br />
            <li>
              Fast-forward to today, I have built a number of responsive web
              applications, led teams in construct weeks, and completed rigorous
              training in the MERN stack. With my knowledge of React,
              JavaScript, and practical experience in startups, I am now seeking
              a role as a frontend developer to contribute to innovative
              solutions.
            </li>
            <br />
          </ul>
        </div>

        <Svg1 className="svg" data-aos="slide-left" />
      </div>
    </div>
  );
};

export default About;
