import React from 'react';
import { TiTick } from "react-icons/ti";

const Tools = () => {
  // Define skills categorized by their respective development areas
  const skills = {
    frontend: [
      { skill: "HTML", level: "Experienced" },
      { skill: "CSS", level: "Intermediate" },
      { skill: "JavaScript", level: "Beginner" },
      { skill: "React", level: "Experienced" },
      { skill: "Tailwind", level: "Experienced" },
      { skill: "TypeScript", level: "Beginner" }
    ],
    backend: [
      { skill: "PHP", level: "Experienced" },
      { skill: "Node.js", level: "Intermediate" },
      { skill: "Django", level: "Beginner" },
      { skill: "Express.js", level: "Intermediate" },
      { skill: "Spring Boot", level: "Beginner" },
      { skill: "Ruby on Rails", level: "Beginner" }
    ],
    database: [
      { skill: "MySQL", level: "Experienced" },
      { skill: "MongoDB", level: "Intermediate" },
      { skill: "PostgreSQL", level: "Beginner" },
      { skill: "Firebase", level: "Experienced" },
      { skill: "SQLite", level: "Intermediate" },
      { skill: "Redis", level: "Beginner" }
    ]
  };

  return (
    <div className='bg-black min-h-screen'>
      <div className='p-6 mx-5 lg:mx-[5%] space-y-8'>
        <div className='text-center text-slate-400 font-extrabold mt-20'>
          <h1 className=' text-xl text-slate-400 md:text-4xl mb-6 md:mb-16'>Tools I Frequently Use to Build Software Applications</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 '>
          {Object.keys(skills).map((category, index) => (
            <div key={index} className='border-2 border-slate-300 p-4 space-y-4 rounded-lg text-slate-400 hover:border-s-2 hover:border-green-700'>
              <h1 className='text-center font-extrabold text-xl md:text-2xl'>{`${category.charAt(0).toUpperCase()}${category.slice(1)} Development`}</h1>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 p-4'>
                {skills[category].map((skill, skillIndex) => (
                  <div key={skillIndex} className='flex items-center hover:border-l-2 hover:border-green-800 p-2'>
                    <TiTick className='rounded-full text-xl font-extrabold text-black bg-slate-300 mr-2'/>
                    <div>
                      <label htmlFor={`skill-${category}-${skillIndex}`} className='font-bold text-sm'>{skill.skill}</label>
                      <p className='text-xs text-slate-500'>{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tools;
