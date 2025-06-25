import React, { useState } from "react";
import {
  Accounting,
  Cafetaria,
  HospitalQueue,
  ExpenseTracker,
} from "../assets";

const data = [
  {
    ProjectId: 1,
    ProjectName: "Accounting",
    ProjectImg: Accounting,
    ProjectDesc:
      "A desktop application for managing company accounting. It automatically generates financial statements, including the statement of financial position, profit and loss, and changes in equity. Built with Electron, React Router, Tailwind CSS, SQLite3, and a modern UI/UX.",
  },
  {
    ProjectId: 2,
    ProjectName: "Hospital Information System",
    ProjectImg: HospitalQueue,
    ProjectDesc:
      "A web application designed to manage hospital queues efficiently. Built with React, Express, MongoDB, and a modern UI/UX.",
  },
  {
    ProjectId: 3,
    ProjectName: "Cafeteria App",
    ProjectImg: Cafetaria,
    ProjectDesc:
      "An Android application for managing cafeteria operations. Built with React Native, Expo Router, Expo SQLite, and a modern UI/UX.",
  },
  {
    ProjectId: 4,
    ProjectName: "Expense Tracker App",
    ProjectImg: ExpenseTracker,
    ProjectDesc:
      "An Android application for managing personal finances and achieving financial independence. Built with React Native, Expo Router, Expo SQLite, and a modern UI/UX.",
  },
];
const Project = ({ inView }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      className={`mb-6 w-full m-auto min-h-screen transition-all duration-700 ease-in-out
    ${
      inView
        ? "scale-100 translate-x-0 opacity-100"
        : "scale-0 -translate-x-full opacity-0"
    } p-5 lg:w-[1000px]`}
    >
      <div className="text-center">
        <div className="inline-block text-5xl font-bold tracking-wider text-center border-b-8 border-b-teal-500 pb-4 text-teal-600">
          Project
        </div>
      </div>
      <div className="text-center my-3">
        // These are my projects using mostly JavaScript //
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.map((el) => (
          <div
            key={el.ProjectId}
            className="relative cursor-pointer"
            onMouseEnter={() => setHovered(el.ProjectId)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={el.ProjectImg} alt="" className="w-full" />
            <div
              className={`bg-slate-800/90 p-5 text-white absolute inset-0 transition-all duration-300 ${
                hovered === el.ProjectId ? "opacity-100" : "opacity-0"
              } overflow-y-auto`}
            >
              <div className="text-xl font-bold mb-3">{el.ProjectName}</div>
              <div className="text-sm">{el.ProjectDesc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
