import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

const data = [
  {
    EducateId: 1,
    EducateYear: `2019 - 2023`,
    EducateName: `Bachelor of Economics in Management, University of Prima Indonesia, Medan`,
  },
  {
    EducateId: 2,
    EducateYear: `2016 - 2019`,
    EducateName: `Senior High School National 4,  Medan.`,
  },
  {
    EducateId: 3,
    EducateYear: `2013 - 2016`,
    EducateName: `Junior High School Saint Mary,  Karo Highland.`,
  },
  {
    EducateId: 4,
    EducateYear: `2007 - 2013`,
    EducateName: `Elementary School Saint Joseph, Karo Highland.`,
  },
];
const Education = ({ inView }) => {
  return (
    <div
      className={`w-full mb-6 m-auto min-h-screen transition-all duration-700 ease-in-out transform
    ${
      inView
        ? "scale-100 translate-x-0 opacity-100"
        : "scale-0 -translate-x-full opacity-0"
    } p-5 lg:w-[1000px]`}
    >
      <div className="flex justify-center mb-5">
        <div className="inline-block border-b-8 border-b-teal-500 pb-4 my-5">
          <div className="flex items-center gap-4">
            <FaGraduationCap className="text-5xl text-teal-600" />
            <div className="text-3xl font-bold tracking-wider text-teal-600">
              Education
            </div>
          </div>
        </div>
      </div>
      {/* list  */}
      {data.map((el) => (
        <div className="flex" key={el.EducateId}>
          <div className="border-r-[5px] border-teal-500 w-[30%] lg:w-[150px]">
            <div className="relative">
              <div className="font-bold text-lg text-teal-600 me-3">
                {el.EducateYear}
              </div>
              <div className="bg-teal-600 w-[14px] h-[14px] rounded-full absolute right-[-10px] top-0"></div>
            </div>
          </div>
          <div className="pb-3 flex-1">
            <div className="ps-4 mb-1 font-bold text-teal-700 text-xl tracking-wider">
              {el.EducateName}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
