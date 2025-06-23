import { useEffect, useState } from "react";
import { Education, Home, Project, Topbar, Works } from "./components";
import useInViewObserver from "./hooks/useInObserver";

function App() {
  const [valueY, setValueY] = useState(0);
  const [homeRef, homeInView] = useInViewObserver();
  const [projectsRef, projectsInView] = useInViewObserver();
  const [worksRef, worksInView] = useInViewObserver();
  const [educationRef, educationInView] = useInViewObserver();
  useEffect(() => {
    const handleScroll = () => {
      setValueY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    // Clean-up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Topbar
        scrollToSection={{
          homeRef,
          projectsRef,
          worksRef,
          educationRef,
        }}
      />
      <Home valueY={valueY} />
      <div ref={projectsRef}>
        <Project inView={projectsInView} />
      </div>
      <div ref={worksRef}>
        <Works inView={worksInView} />
      </div>
      <div ref={educationRef}>
        <Education inView={educationInView} />
      </div>
    </div>
  );
}

export default App;
