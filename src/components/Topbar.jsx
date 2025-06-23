import React, { useEffect, useState } from "react";
import { JosseIcon } from "../assets";

const Topbar = ({ scrollToSection }) => {
  const [active, setActive] = useState("Home");
  const handleScrollTo = (ref, name) => {
    if (ref?.current) {
      const offsetTop = ref.current.offsetTop - 80;
      window.scrollTo({ top: offsetTop });
      setActive(name);
    }
  };
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const positions = {
      Home: 0,
      Works: scrollToSection.worksRef?.current?.offsetTop - 90 || 0,
      Projects: scrollToSection.projectsRef?.current?.offsetTop - 90 || 0,
      Education: scrollToSection.educationRef?.current?.offsetTop - 90 || 0,
    };
    if (scrollY >= positions.Education) {
      setActive("Education");
    } else if (scrollY >= positions.Works) {
      setActive("Works");
    } else if (scrollY >= positions.Projects) {
      setActive("Projects");
    } else {
      setActive("Home");
    }
  };
  useEffect(() => {
    // console.log(window.innerWidth);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollToSection]);
  const menuItems = [
    { name: "Home", ref: null },
    { name: "Projects", ref: scrollToSection.projectsRef },
    { name: "Works", ref: scrollToSection.worksRef },
    { name: "Education", ref: scrollToSection.educationRef },
  ];
  return (
    <div className="fixed top-0 right-0 left-0 shadow-md bg-white z-10 topToBtm">
      <div className="h-[80px] flex items-center justify-between w-[1024px] m-auto sectionTop">
        <div className="flex items-center gap-5 first">
          <img src={JosseIcon} alt="Josse Icon" className="h-10 w-10" />
          <div className="text-2xl font-bold tracking-wider">Josse</div>
        </div>
        <div className="flex items-center gap-5 second">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`cursor-pointer ${
                active === item.name
                  ? "text-xl text-teal-500 font-bold"
                  : "text-lg"
              }`}
              onClick={() => {
                if (item.name === "Home") {
                  window.scrollTo({ top: 0 });
                } else {
                  handleScrollTo(item.ref, item.name);
                }
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
