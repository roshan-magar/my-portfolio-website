import React from 'react';
import { FaDatabase, FaReact } from 'react-icons/fa';
import { SiBackendless, SiHostinger } from 'react-icons/si'; // Removed SiCodesignal and MdGraphicEq
import { MdGraphicEq } from 'react-icons/md';
import { IoDesktopSharp } from 'react-icons/io5';

const Services = () => {
  const serviceData = {
    'Web Development': {
      icon: IoDesktopSharp,
      description: "We specialize in creating modern and attractive websites with clean and maintainable code.",
    },
    'React With Frontend': {
      icon: FaReact,
      description: "Develop interactive and responsive user interfaces using the powerful React library.",
    },
    'Database': {
      icon: FaDatabase,
      description: "Design and optimize databases to store and manage your data efficiently and securely.",
    },
    'Web Hosting': {
      icon: SiHostinger,
      description: "Get reliable and high-performance web hosting solutions tailored to your needs.",
    },
    'Graphic Design': {
      icon: MdGraphicEq,
      description: "Transform your ideas into stunning visuals and graphics with our creative design services.",
    },
    'Backend With Node js': {
      icon: SiBackendless,
      description: "Build robust backend systems using Node.js, ensuring scalability and performance.",
    }
  };

  return (
    <div className="bg-black min-h-screen text-slate-400">
      <div className="p-6 mx-5 lg:mx-[5%] space-y-8 ">
        <h1 className="font-extrabold text-2xl md:text-4xl mb-4 md:mb-8 mt-2 text-center mt-20">
          Here Are Few Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(serviceData).map((serviceName, index) => {
            const { icon: IconComponent, description } = serviceData[serviceName];
            return (
              <div key={index} className="p-6 bg-gray-800 rounded-xl space-y-4 text-center">
                <IconComponent className="text-4xl text-green-700 mx-auto" />
                <h1 className="text-2xl font-extrabold text-slate-400">{serviceName}</h1>
                <p className="text-base text-gray-500">{description}</p>
                <button className="mt-4 inline-block border-b-2 border-green-800 text-green-500">
                  See more
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
