import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close sidebar after clicking a link
    }
  };

  return (
    <nav className='bg-black fixed top-0 left-0 w-full z-50'>
      <div className='flex justify-between items-center text-slate-300 p-6 md:ml-[5%] md:mr-[5%]'>
        <div className='flex items-center'>
          <h1 className='text-lg font-extrabold'>
            <span className='text-green-700'>ROS</span>HAN
          </h1>
        </div>
        {/* Desktop navbar (hidden on mobile) */}
        <ul className='hidden md:flex space-x-6 font-bold'>
          <li className='nav-link' onClick={() => scrollToSection('home')}>
            Home
          </li>
          <li className='nav-link' onClick={() => scrollToSection('about')}>
            About
          </li>
          
          <li className='nav-link' onClick={() => scrollToSection('services')}>
            Services
          </li>
          <li className='nav-link' onClick={() => scrollToSection('projects')}>
            Projects
          </li>
          <li className='nav-link' onClick={() => scrollToSection('contacts')}>
            Contacts
          </li>
        </ul>

        {/* Mobile sidebar (shown on mobile) */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-1/2 bg-black bg-opacity-90 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition duration-300 ease-in-out`}
        >
          <div className='flex justify-between items-center p-4 font-bold shadow-lg bg-black'>
            <h1 className='text-lg'>Menu</h1>
            <RxCross2
              className='text-right text-2xl cursor-pointer'
              onClick={toggleSidebar}
            />
          </div>
          <ul className='flex flex-col items-center justify-center mt-4 space-y-6 font-bold'>
            <li
              className='nav-link-mobile'
              onClick={() => {
                scrollToSection('home');
                toggleSidebar();
              }}
            >
              Home
            </li>
            <li
              className='nav-link-mobile'
              onClick={() => {
                scrollToSection('about');
                toggleSidebar();
              }}
            >
              About
            </li>
            <li
              className='nav-link-mobile'
              onClick={() => {
                scrollToSection('tools');
                toggleSidebar();
              }}
            >
              Tools
            </li>
            
            <li
              className='nav-link-mobile'
              onClick={() => {
                scrollToSection('services');
                toggleSidebar();
              }}
            >
              Services
            </li>
            <li
              className='nav-link-mobile'
              onClick={() => {
                scrollToSection('projects');
                toggleSidebar();
              }}
            >
              Projects
            </li>
            <li
              className='nav-link-mobile'
              onClick={() => {
                scrollToSection('contacts');
                toggleSidebar();
              }}
            >
              Contacts
            </li>
          </ul>
        </div>

        {/* Menu icon */}
        <FaBars
          className='text-slate-300 h-6 w-6 mr-2 cursor-pointer md:hidden'
          onClick={toggleSidebar}
        />
      </div>
    </nav>
  );
};

export default Navbar;
