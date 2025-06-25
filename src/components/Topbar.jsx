import React, { useEffect, useState } from "react";
import { JosseIcon } from "../assets";

const Topbar = ({ scrollToSection, inViewStatus }) => {
  const [active, setActive] = useState("Home");
  const handleScrollTo = (ref, name) => {
    if (ref?.current) {
      const offsetTop = ref.current.offsetTop - 93;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setActive(name);
    }
  };
  useEffect(() => {
    if (inViewStatus.educationInView) {
      setActive("Education");
    } else if (inViewStatus.worksInView) {
      setActive("Works");
    } else if (inViewStatus.projectsInView) {
      setActive("Projects");
    } else if (inViewStatus.homeInView) {
      setActive("Home");
    }
  }, [inViewStatus]);

  const menuItems = [
    { name: "Home", ref: scrollToSection.homeRef },
    { name: "Projects", ref: scrollToSection.projectsRef },
    { name: "Works", ref: scrollToSection.worksRef },
    { name: "Education", ref: scrollToSection.educationRef },
  ];

  return (
    <div className="fixed top-0 right-0 left-0 shadow-md bg-white z-10 py-2 lg:py-0 topToBtm">
      <div className="w-full h-[80px] flex flex-col lg:flex-row items-center justify-between lg:w-[1000px] m-auto overflow-x-auto">
        <div className="flex items-center gap-5">
          <img src={JosseIcon} alt="Josse Icon" className="h-10 w-10" />
          <div className="text-2xl font-bold tracking-wider">Josse</div>
        </div>
        <div className="flex items-center gap-5">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`cursor-pointer ${
                active === item.name
                  ? "text-xl text-teal-500 font-bold"
                  : "text-lg"
              }`}
              onClick={() => handleScrollTo(item.ref, item.name)}
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
