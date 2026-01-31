import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const StatItem = ({ number, text }) => (
  <div className="flex items-center gap-3">
    <span className="text-4xl font-black text-[#1E212C] dark:text-white">{number}</span>
    <span className="text-sm text-[#1E212C] dark:text-gray-300">{text}</span>
  </div>
);


export default function Home1() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300">
        


        <section className="bg-[#FFEFEC] dark:bg-gray-800 py-16 sm:py-20 px-4 sm:px-6 transition-colors duration-300">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          
            <div className="md:w-1/2 space-y-6 sm:space-y-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 cursor-pointer">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#FF4242] rounded-full flex items-center justify-center text-white">
                  <FaPlay className="text-sm" />
                </div>
                <span className="font-bold text-[#1E212C] dark:text-white text-sm sm:text-base">
                  Play showreel.
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E212C] dark:text-white leading-tight">
                Enjoy studying with <br className="hidden sm:block" />
                Createx Online Courses
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="border border-[#FF4242] text-[#FF4242] dark:text-[#FF4242] dark:border-[#FF4242] px-6 sm:px-8 py-3 sm:py-4 font-bold hover:bg-[#FF4242] hover:text-white transition">
                  About us
                </button>
                <button className="bg-gradient-to-r from-[#FF7A1B] to-[#FF4242] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold">
                  Explore courses
                </button>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src="/illustration.png"
                alt=""
                className="w-full max-w-xs sm:max-w-md md:max-w-full"
              />
            </div>
          </div>

       
          <div className="max-w-6xl mx-auto mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
            <StatItem number="1200" text="Students graduated" />
            <StatItem number="84" text="Completed courses" />
            <StatItem number="16" text="Qualified tutors" />
            <StatItem number="5" text="Years of experience" />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid md:grid-cols-2 gap-10 items-center">
          <img src="/image (74).png" alt="" className="w-full max-w-md mx-auto" />

          <div>
            <p className="uppercase text-gray-400 dark:text-gray-500 text-sm font-semibold">
              Who we are?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
              Why Createx?
            </h2> 

            <ul className="mt-6 space-y-4">
              {[
                "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
                "Vulputate placerat amet pulvinar lorem nisl.",
                "Consequat feugiat habitant gravida quisque elit bibendum.",
                "Etiam duis lobortis in fames ultrices.",
                "Tincidunt sagittis neque sem ac eget.",
                "Ultricies amet justo et eget quisque.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <IoMdCheckmarkCircleOutline className="text-red-500 text-xl mt-1" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-6 py-3 transition">
              More about us
            </button>
          </div>
        </section>
        
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-10">
            <div>
              <p className="uppercase text-gray-400 dark:text-gray-500 text-sm font-semibold">
                Ready to learn?
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Featured Courses
              </h2>
            </div>
            <button className="border border-red-500 text-red-500 dark:border-red-400 dark:text-red-400 hover:bg-red-500 hover:text-white px-5 py-2 self-start sm:self-auto transition">
              View all courses
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
          </div>
        </section>
      </div>
    </div>
  );
}