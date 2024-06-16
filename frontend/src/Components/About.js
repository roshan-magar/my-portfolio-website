import React from 'react';
import me from '../assets/me.jpg';

const About = () => {
  return (
    <div className='bg-black min-h-screen'>
      <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-20 p-6 mx-5 text-slate-400'>
        <div className='flex justify-center lg:mt-20'>
          <img 
            src={me} 
            alt="Roshan Thapa Magar" 
            className='rounded-lg border-4 border-green-800 p-2 h-[350px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[300px] md:w-[250px] lg:h-[400px] lg:w-[300px]'
          />
        </div>
        <div className='flex flex-col justify-center lg:mt-8 max-w-3xl'>
          <h2 className='text-2xl md:text-4xl mb-2 text-center lg:text-left'>
            About <span className='text-green-600'>Me</span>
          </h2>
          <h1 className='text-xl md:text-4xl mb-4 text-center lg:text-left'>
            Full-Stack <span className='text-green-600'>Developer</span>
          </h1>
          <p className='text-base md:text-lg text-justify text-gray-500 mb-4 '>
            Hello, I'm Roshan Thapa Magar. I was born in Siddhalek-4, Gauthale, Dhading, but currently, I live in Budhanilkantha, Hattigauda, Kathmandu. I'm pursuing my BSc in IT and have been working as a full-stack web developer and UI/UX designer for over a year. I'm proficient in HTML, CSS, JavaScript, and have experience with React and frameworks like Tailwind CSS. I enjoy creating intuitive interfaces that blend functionality with aesthetics. Outside of work, I enjoy playing games, watching movies, and reading. I'm eager to collaborate on new digital projects and contribute creatively.
          </p>
          <div className='flex flex-col sm:flex-row justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6'>
            <button className='rounded bg-green-800 p-2 sm:p-3 hover:bg-black hover:border hover:border-green-800  hover:text-slate-400 text-sm sm:text-base'>
              Download CV
            </button>
            <button className='rounded bg-black border border-green-800 text-slate-400 p-2 sm:p-3 lg:hover:bg-green-800 lg:hover:border-green-700 lg:hover:text-slate-400 text-sm sm:text-base'>
              <a href="https://github.com/roshan-magar" target='_blank' rel="noopener noreferrer">GitHub Profile</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
