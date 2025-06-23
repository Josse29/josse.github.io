import React from "react";
import { FaLaptopCode } from "react-icons/fa6";

const data = [
  {
    WorkId: 1,
    WorkTime: "2024 – 2025",
    WorkPlace: "Freelance Fullstack Developer",
    WorkDesc: `Developed web, desktop, and Android applications primarily using JavaScript, tailored to client requirements. Handled projects from platforms such as Fiverr, Upwork, and other freelance sources. Provided feature-based pricing, maintained application security, and ensured full accountability for bugs and updates.`,
  },
  {
    WorkId: 2,
    WorkTime: "2023 – 2024",
    WorkPlace: "Web & Mobile Developer, CV. Medika Solusi Digital",
    WorkDesc: `The development of web, desktop, and Android applications for healthcare systems using JavaScript technologies. Ensured system reliability, resolved issues proactively, and integrated solutions with the Ministry of Health’s policies and standards in Indonesia.`,
  },
  {
    WorkId: 3,
    WorkTime: "2022 – 2023",
    WorkPlace: "Web Developer Intern, Sekolah Ekspor",
    WorkDesc: `Focused on front-end development and responsive design using Laravel Blade. Collaborated with the team to integrate APIs and build a news platform highlighting student export success stories in international markets.`,
  },
  {
    WorkId: 4,
    WorkTime: "2021 – 2022",
    WorkPlace: "Mobile Technician, STTSI Medan",
    WorkDesc: `Repaired smartphones and mobile devices with a focus on transparency, honesty, and effective problem-solving. Ensured customer satisfaction and full accountability for all services provided.`,
  },
];

const Works = ({ inView }) => {
  return (
    <div
      className={`mb-6 w-[1024px] m-auto min-h-screen transition-all duration-700 ease-in-out transform
    ${
      inView
        ? "scale-100 translate-x-0 opacity-100"
        : "scale-0 translate-x-full opacity-0"
    } p-5 sectionThird`}
    >
      <div className="flex justify-center mb-5">
        <div className="inline-block border-b-8 border-b-teal-500 pb-4 my-5">
          <div className="flex items-center gap-4">
            <FaLaptopCode className="text-5xl text-teal-600" />
            <div className="text-3xl font-bold tracking-wider text-teal-600">
              Working Experience
            </div>
          </div>
        </div>
      </div>
      {/* list  */}
      {data.map((el) => (
        <div className="flex" key={el.WorkId}>
          <div className="w-[150px] border-r-[5px] border-teal-500 first">
            <div className="relative">
              <div className="font-bold text-lg text-teal-600 me-3">
                {el.WorkTime}
              </div>
              <div className="bg-teal-600 w-[14px] h-[14px] rounded-full absolute right-[-10px] top-0"></div>
            </div>
          </div>
          <div className="pb-3 flex-1 second">
            <div className="ps-4 mb-1 font-bold text-teal-700 text-xl tracking-wider">
              {el.WorkPlace}
            </div>
            <div className="ps-4 mb-1">{el.WorkDesc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
