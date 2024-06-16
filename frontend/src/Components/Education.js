import React from "react";

const Education = () => {
  return (
    <div className="bg-black min-h-screen text-slate-400">
      <div className="p-6 mx-5 lg:mx-[5%] space-y-8">
        <div className="grid md:grid-cols-2 grid-col items-center  md:space-x-12 space-y-4 ">
          <div>
            <h1 className="ml-6 text-4xl font-extrabold mb-6 text-green-800">
              Education
            </h1>
            <div className="border-l-4 border-green-900 ">
              <div className="ml-6 text-slate-400 space-y-4">
                <div>
                  <label
                    for=""
                    className="text-green-900 font-extrabold text-base"
                  >
                    2010-2020
                  </label>
                  <h1 className="font-extrabold text-xl">
                    School-Level Education
                  </h1>
                  <p className="opacity-50 text-justify hover:opacity-90">
                    I completed my school education in 2020 at Kali Devi
                    Secondary School in Siddhalek-4, Aarubash, Dhading, with a
                    GPA of 2.70. While there, I took part in many academic and
                    extracurricular activities, which helped me develop strong
                    critical thinking and problem-solving skills.
                  </p>
                </div>
                <div>
                  <label
                    for=""
                    className="text-green-900 font-extrabold text-base"
                  >
                    2020-2022
                  </label>
                  <h1 className="font-extrabold text-xl">High School Degree</h1>
                  <p className="opacity-50 text-justify hover:opacity-90">
                    I completed my high school education in 2022 at Nilakantha
                    Secondary School, Bich Bazar, Dhading, obtaining a +2 degree
                    in the Management field. During this time, I achieved a GPA
                    of 2.74, reflecting my dedication to academic success and
                    learning in my chosen field.
                  </p>
                </div>
                <div>
                  <label
                    for=""
                    className="text-green-900 font-extrabold text-base"
                  >
                    2022-2025
                  </label>
                  <h1 className="font-extrabold text-xl">Bachelor's Degree</h1>
                  <p className="opacity-50 text-justify hover:opacity-90">
                    I am studying for a Bachelor's Degree in BSc.IT at Herald
                    College in Kathmandu. The college is affiliated with the
                    University of Wolverhampton, UK. I have completed 2 years of
                    coursework since I started in 2022 and plan to graduate by
                    2025.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="ml-6 text-4xl font-extrabold mb-6 text-green-800">
              Experience
            </h1>
            <div className="border-l-4 border-green-900 ">
              <div className="ml-6 text-slate-400 space-y-4">
                <div>
                  <label
                    for=""
                    className="text-green-900 font-extrabold text-base"
                  >
                    2023-2024
                  </label>
                  <h1 className="font-extrabold text-xl">UI/UX Designer</h1>
                  <p className="opacity-50 text-justify hover:opacity-90">
                    I gained 1 year of experience in UI/UX design, focusing on
                    creating user-friendly interfaces that blend functionality
                    with aesthetic appeal. Working closely with teams, I
                    translated user requirements into intuitive design solutions
                    to enhance user experience across digital platforms.
                  </p>
                </div>
                <div>
                  <label
                    for=""
                    className="text-green-900 font-extrabold text-base"
                  >
                    2020-2024
                  </label>
                  <h1 className="font-extrabold text-xl">Frontend Developer</h1>
                  <p className="opacity-50 text-justify hover:opacity-90">
                    I have 2 years of experience in frontend development,
                    specializing in HTML, CSS, React, JavaScript, TypeScript,
                    and Tailwind CSS. During this time, I've honed my skills in
                    creating responsive and dynamic user interfaces, ensuring
                    robust and efficient web applications.
                  </p>
                </div>
                <div>
                  <label
                    for=""
                    className="text-green-900 font-extrabold text-base"
                  >
                    2022-2024
                  </label>
                  <h1 className="font-extrabold text-xl">
                    Full-Stack Developer
                  </h1>
                  <p className="opacity-50 text-justify hover:opacity-90">
                    I have 2 years of experience in backend development with
                    PHP, Java, and Python. Currently, I'm learning Node.js with
                    Express.js and Django to expand my skills. My goal is to
                    become a full-stack developer proficient in both frontend
                    and backend technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
