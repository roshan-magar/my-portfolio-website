import React from 'react';
import img from '../assets/me.jpg';
import p from '../assets/mee.jpg';

const Projects = () => {
  return (
    <div className='bg-black min-h-screen border-b-2 border-green-900'>
      <div className='p-6 mx-[5%] text-slate-400'>
        <h1 className='font-extrabold text-2xl md:text-4xl mb-4 md:mb-8 mt-20 text-center'>My Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='border border-slate-300 hover:border-green-800 p-4 rounded-lg'>
            <img src={img} alt="Project 1" className='w-full h-[40vh] object-cover rounded-lg'/>
            <h1 className='font-bold text-xl text-center mt-4'>Weather App</h1>
            <p className='text-justify p-4'>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</p>
            <div className='flex justify-between items-center font-bold p-4'>
              <button className='bg-green-800 p-2 rounded-lg sm:hover:bg-black sm:hover:border sm:hover:border-green-800 '>
                <span className='sm:ml-4 sm:mr-4'>Demo</span>
              </button>
              <button className='border border-green-800 p-2 rounded-lg sm:hover:bg-green-800'>
                <span className='sm:ml-4 sm:mr-4'>Github</span>
              </button>
            </div>
          </div>

          <div className='border border-slate-300 hover:border-green-800  p-4 rounded-lg'>
            <img src={p} alt="Project 2" className='w-full h-[40vh] object-cover rounded-lg'/>
            <h1 className='font-bold text-xl text-center mt-4'>Weather App</h1>
            <p className='text-justify p-4'>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</p>
            <div className='flex justify-between items-center font-bold p-4'>
              <button className='bg-green-800 p-2 rounded-lg sm:hover:bg-black sm:hover:border sm:hover:border-green-800 '>
                <span className='sm:ml-4 sm:mr-4'>Demo</span>
              </button>
              <button className='border border-green-800 p-2 rounded-lg sm:hover:bg-green-800'>
                <span className='sm:ml-4 sm:mr-4'>Github</span>
              </button>
            </div>
          </div>

          <div className='border border-slate-300 hover:border-green-800  p-4 rounded-lg'>
            <img src={img} alt="Project 3" className='w-full h-[40vh] object-cover rounded-lg'/>
            <h1 className='font-bold text-xl text-center mt-4'>Weather App</h1>
            <p className='text-justify p-4'>Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</p>
            <div className='flex justify-between items-center font-bold p-4'>
              <button className='bg-green-800 p-2 rounded-lg  sm:hover:bg-black sm:hover:border sm:hover:border-green-800 '>
                <span className='sm:ml-4 sm:mr-4'>Demo</span>
              </button>
              <button className='border border-green-800 p-2 rounded-lg sm:hover:bg-green-800'>
                <span className='sm:ml-4 sm:mr-4'>Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
