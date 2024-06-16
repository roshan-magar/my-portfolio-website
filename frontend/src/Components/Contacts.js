import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="bg-black">
      <div className="p-6 mx-5 lg:mx-[5%]">
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 font-bold mt-16 border-b-2 border-green-900">
          <div className="mb-6 md:mb-0">
            <h1 className="text-base md:text-lg">Roshan Magar</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-6">
            <div className="flex flex-col space-y-2">
              <h1 className="font-extrabold text-sm md:text-lg">RESOURCES</h1>
              <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-8 text-xs md:text-sm text-slate-500">W3Schools</a>
              <a href="https://tailwindcss.com/docs/installation/framework-guides" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-8 text-xs md:text-sm text-slate-500">Tailwind CSS</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="font-extrabold text-sm md:text-lg">FOLLOW ME</h1>
              <a href="https://github.com/roshan-magar" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-8 text-xs md:text-sm text-slate-500">GitHub</a>
              <a href="https://www.linkedin.com/in/roshan-g-magar-b97154314/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-8 text-xs md:text-sm text-slate-500">Linkedin</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="font-extrabold text-sm md:text-lg">CONTACT</h1>
              <a href="mailto:roshangmgr9@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-8 text-xs md:text-sm text-slate-500">Gmail</a>
              <a href="tel:9742531161" className="hover:underline underline-offset-8 text-xs md:text-sm text-slate-500">Phone</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="font-extrabold text-sm md:text-lg">ABOUT</h1>
              <label className="hover:underline underline-offset-8 text-xs md:text-sm text-slate-500">Freelancer</label>
              <label className="hover:underline underline-offset-8 text-xs md:text-sm text-slate-500">UI/UX & Developer</label>
            </div>
          </div>
        </div>
        <footer className="text-slate-400 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <label className="text-xs md:text-sm">© 2024 Roshan Thapa Magar. All Rights Reserved.</label>
            <ul className="flex items-center space-x-6 mt-4 md:mt-0">
              <li><a href="https://www.facebook.com/profile.php?id=100084512194161" target='_blank' rel="noopener noreferrer">< FaFacebook /></a></li>
              <li><a href="https://www.instagram.com/roshamagar974253/" target='_blank' rel="noopener noreferrer"><FaInstagram /></a></li>
              <li><a href="https://x.com/magar_g45992" target='_blank' rel="noopener noreferrer"><FaTwitter /></a></li>
              <li><a href="https://github.com/roshan-magar" target='_blank' rel="noopener noreferrer"><FaGithub /></a></li>
              <li><a href="https://www.linkedin.com/in/roshan-g-magar-b97154314/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Contacts;
