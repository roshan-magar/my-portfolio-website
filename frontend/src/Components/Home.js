import React from "react";
import code from "../assets/code.png";
import "../App.css";

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black">
      <div className="flex flex-col lg:flex-row justify-between items-center p-6 ml-[5%] mr-[5%] h-auto md:h-[85vh] ">
        <div className="space-y-4 sm:space-y-4 text-center md:text-left text-slate-300 ">
          <h1 className="font-extrabold text-4xl sm:text-6xl mt-12 md:mt-4">
            I'm <span className="text-green-600">Roshan</span>
            <br />
            <span className="text-xl sm:text-5xl">A Software Engineer</span>
          </h1>

          <p className="text-gray-400">
            A self-educated learner who believes in the power of persistence
            and creativity.
          </p>
          <div className="md:hidden mx-auto p-8 rounded-xl shadow-md shadow-emerald-400 mb-8 sm:w-[400px] sm:h-[350px]">
            <img src={code} alt="Coding" className="w-[400px] h-[300px] " />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start sm:space-x-6 space-y-2 sm:space-y-0 font-bold">
            <button className="border border-green-800 bg-green-800 md:hover:bg-black p-2 md:p-3 rounded">
              Hire Me
            </button>
            <button
              className="border border-green-600 md:hover:bg-green-800 p-2 md:p-3 rounded text-slate-400 md:hover:text-slate-400"
              onClick={() => scrollToSection('education')}
            >
              Education
            </button>
          </div>
        </div>
        <div className="hidden lg:block md:mr-8 mt-10">
          <div className="bg-gray-600 md:w-[300px] md:h-[400px] rounded-lg p-4">
            <div className="md:w-[300px] md:h-[400px] bg-slate-400 rounded-lg p-4">
              <div className="md:w-[300px] md:h-[400px] bg-green-900 rounded-lg border-l-4 border-b-4 border-green-900">
                <img
                  src={code}
                  alt="Coding"
                  className="md:w-[295px] md:h-[396px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
