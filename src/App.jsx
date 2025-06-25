import { useState } from "react";
import { Education, Home, Project, Topbar, Works } from "./components";
import useInViewObserver from "./hooks/useInObserver";

function App() {
  const [homeRef, homeInView] = useInViewObserver();
  const [projectsRef, projectsInView] = useInViewObserver();
  const [worksRef, worksInView] = useInViewObserver();
  const [educationRef, educationInView] = useInViewObserver();
  return (
    <div className="overflow-x-hidden">
      <Topbar
        scrollToSection={{
          homeRef,
          projectsRef,
          worksRef,
          educationRef,
        }}
        inViewStatus={{
          homeInView,
          projectsInView,
          worksInView,
          educationInView,
        }}
      />
      <div ref={homeRef}>
        <Home />
      </div>
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
