import React, { useEffect, useState } from "react";
import {
  CSS,
  Electron,
  Expo,
  Express,
  Figma,
  Github,
  HTML,
  Josse,
  JS,
  Mongodb,
  Mysql,
  Nodejs,
  ReactJS,
  Socket,
  Vite,
} from "../assets";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";

const texts = [
  "Software Engineer..",
  "Web Developer..",
  "Android Developer..",
  "Desktop Developer..",
];
const TypedText = () => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [typing, setTyping] = useState(true);
  useEffect(() => {
    const fullText = texts[index];
    let i = 0;
    const type = () => {
      if (i <= fullText.length) {
        setDisplay(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTyping(false);
        }, 1500);
      }
    };
    const interval = setInterval(type, 80);
    return () => clearInterval(interval);
  }, [index]);
  useEffect(() => {
    if (!typing) {
      setTimeout(() => {
        setTyping(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 500);
    }
  }, [typing]);

  return <span>{display} |</span>;
};
const skills = [
  {
    SkillId: 1,
    SkillName: "HTML",
    SkillImg: HTML,
  },
  {
    SkillId: 2,
    SkillName: "CSS",
    SkillImg: CSS,
  },
  {
    SkillId: 3,
    SkillName: "Javascript",
    SkillImg: JS,
  },
  {
    SkillId: 4,
    SkillName: "React",
    SkillImg: ReactJS,
  },
  {
    SkillId: 5,
    SkillName: "Expo",
    SkillImg: Expo,
  },
  {
    SkillId: 6,
    SkillName: "Expo",
    SkillImg: Electron,
  },
  {
    SkillId: 7,
    SkillName: "Socket",
    SkillImg: Socket,
  },
  {
    SkillId: 8,
    SkillName: "Nodejs",
    SkillImg: Nodejs,
  },
  {
    SkillId: 9,
    SkillName: "Mysql",
    SkillImg: Mysql,
  },
  {
    SkillId: 10,
    SkillName: "Mongodb",
    SkillImg: Mongodb,
  },
  {
    SkillId: 11,
    SkillName: "Express",
    SkillImg: Express,
  },
  {
    SkillId: 12,
    SkillName: "Figma",
    SkillImg: Figma,
  },
  {
    SkillId: 13,
    SkillName: "Github",
    SkillImg: Github,
  },
  {
    SkillId: 14,
    SkillName: "Vite",
    SkillImg: Vite,
  },
];
const Home = () => {
  return (
    <div className="w-full flex-wrap pt-[120px] flex justify-center min-h-screen gap-8 m-auto mb-5 p-7 lg:w-[1000px] xl:flex-nowrap rightToLeft">
      <div>
        <div className="text-5xl mb-3 font-bold">I'm Josse Surya Pinem</div>
        <div className="text-4xl mb-3 text-teal-600 font-bold tracking-wider">
          I'm <TypedText />
        </div>
        {/* desc*/}
        <div className="text-lg mb-2">
          Hi. I'm Josse Surya Pinem, nice to meet you. Please take a look
          around.I am passionate about building excellent software (android,
          desktop, web) that improves the lives of those around me. I specialize
          in creating software for clients ranging from individuals and small-
          businesses all the way to large enterprise corporations. What would
          you do if you had a software expert available at your fingertips ?
        </div>
        {/* My Skills */}
        <div className="mb-3">
          <div className="text-lg mb-2 font-bold tracking-wider">
            My Skills :
          </div>
          <div className="flex flex-wrap">
            {skills.map((el) => (
              <img
                src={el.SkillImg}
                alt=""
                className="h-10 w-10 mr-2 mb-2"
                key={el.SkillId}
              />
            ))}
          </div>
        </div>
        {/* My Contacts */}
        <div>
          <div className="text-lg mb-2 font-bold tracking-wider">
            My Contact :
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-xl" />
              <div className="text-xl">+6289524087023</div>
            </div>
            <div className="flex items-center gap-3">
              <AiTwotoneMail className="text-xl" />
              <div className="text-xl">pinemjosse@gmail.com</div>
            </div>
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/josse-pinem-61a358178/"
                )
              }
            >
              <FaLinkedin className="text-xl" />
              <div className="text-xl">Josse Pinem</div>
            </div>
          </div>
        </div>
        {/* hire me */}
        <div
          className="my-5 bg-teal-500 inline-flex p-4 items-center gap-2 rounded-xl hover:bg-teal-700 cursor-pointer"
          onClick={() => {
            window.open("https://wa.link/2s7u5m", "_blank");
          }}
        >
          <a className="text-2xl text-white font-bold">Hire Me !</a>
          <span>
            <HiArrowNarrowRight className="ml-2 text-2xl text-white" />
          </span>
        </div>
      </div>
      <img
        src={Josse}
        alt=""
        className="w-[80%] md:w-[50%] lg:w-[460px] lg:h-[460px]"
      />
    </div>
  );
};

export default Home;
