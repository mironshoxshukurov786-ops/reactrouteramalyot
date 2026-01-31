import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function CourseSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="min-h-screen bg-white py-20 px-6 md:px-24 font-sans text-[#2d2e32]">
      <div className="max-w-7xl mx-auto">
        {/* For Whom */}
        <div className="grid md:grid-cols-2 gap-16 mb-40">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-6">
              For Whom?
            </div>
            <div className="text-5xl font-extrabold leading-[1.1] tracking-tight">
              Who will benefit from <br /> the course:
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-10">
            <div className="flex gap-4">
              <AiOutlineCheckCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <div className="text-[15px] font-semibold text-gray-600">
                Specialists with more than 1 year of active work experience
              </div>
            </div>
            <div className="flex gap-4">
              <AiOutlineCheckCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <div className="text-[15px] font-semibold text-gray-600 leading-relaxed">
                Mobile app designers who want to improve their skills in solving
                business problems, creating and testing human-centered
                interfaces
              </div>
            </div>
            <div className="flex gap-4">
              <AiOutlineCheckCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <div className="text-[15px] font-semibold text-gray-600">
                Professional designers who want to feel more confident in UX
              </div>
            </div>
            <div className="flex gap-4">
              <AiOutlineCheckCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
              <div className="text-[15px] font-semibold text-gray-600">
                Specialists who would like to structure their knowledge, fill in
                the gaps
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-6">
              Course Program
            </div>
            <div className="text-5xl font-extrabold mb-12 tracking-tight">
              What you will learn
            </div>

            <div className="flex flex-col">
     
              <div className="border-b border-gray-100">
                <div
                  onClick={() => setOpenIndex(openIndex === 0 ? -1 : 0)}
                  className="flex items-center py-5 cursor-pointer group"
                >
                  <div className="mr-4 text-red-400">
                    {openIndex === 0 ? (
                      <FiMinus size={18} />
                    ) : (
                      <FiPlus size={18} />
                    )}
                  </div>
                  <div
                    className={`text-base font-bold transition-colors ${openIndex === 0 ? "text-red-400" : "text-gray-800"}`}
                  >
                    <span className="opacity-60 font-medium mr-1">
                      Lesson 1.
                    </span>{" "}
                    Aliquet lectus urna viverra in odio.
                  </div>
                </div>
                {openIndex === 0 && (
                  <div className="pl-9 pb-6 text-sm leading-relaxed text-gray-500 max-w-md">
                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec
                    pulvinar aliquet donec enim, ornare. Lacus facilisis
                    curabitur turpis varius mauris.
                  </div>
                )}
              </div>

              <div className="border-b border-gray-100">
                <div
                  onClick={() => setOpenIndex(openIndex === 1 ? -1 : 1)}
                  className="flex items-center py-5 cursor-pointer"
                >
                  <div className="mr-4 text-red-400">
                    {openIndex === 1 ? (
                      <FiMinus size={18} />
                    ) : (
                      <FiPlus size={18} />
                    )}
                  </div>
                  <div className="text-base font-bold text-gray-800">
                    <span className="opacity-60 font-medium mr-1">
                      Lesson 2.
                    </span>{" "}
                    Orci commodo, viverra orci mollis ut euismod.
                  </div>
                </div>
              </div>

            
              <div className="border-b border-gray-100">
                <div
                  onClick={() => setOpenIndex(openIndex === 2 ? -1 : 2)}
                  className="flex items-center py-5 cursor-pointer"
                >
                  <div className="mr-4 text-red-400">
                    {openIndex === 2 ? (
                      <FiMinus size={18} />
                    ) : (
                      <FiPlus size={18} />
                    )}
                  </div>
                  <div className="text-base font-bold text-gray-800">
                    <span className="opacity-60 font-medium mr-1">
                      Lesson 3.
                    </span>{" "}
                    Sagittis vitae facilisi rutrum amet mauris quisque vel.
                  </div>
                </div>
              </div>


              <div className="border-b border-gray-100">
                <div
                  onClick={() => setOpenIndex(openIndex === 3 ? -1 : 3)}
                  className="flex items-center py-5 cursor-pointer"
                >
                  <div className="mr-4 text-red-400">
                    {openIndex === 3 ? (
                      <FiMinus size={18} />
                    ) : (
                      <FiPlus size={18} />
                    )}
                  </div>
                  <div className="text-base font-bold text-gray-800">
                    <span className="opacity-60 font-medium mr-1">
                      Lesson 4.
                    </span>{" "}
                    In id dolor quis nunc, urna hendrerit pharetra.
                  </div>
                </div>
              </div>

            
              <div className="border-b border-gray-100">
                <div
                  onClick={() => setOpenIndex(openIndex === 4 ? -1 : 4)}
                  className="flex items-center py-5 cursor-pointer"
                >
                  <div className="mr-4 text-red-400">
                    {openIndex === 4 ? (
                      <FiMinus size={18} />
                    ) : (
                      <FiPlus size={18} />
                    )}
                  </div>
                  <div className="text-base font-bold text-gray-800">
                    <span className="opacity-60 font-medium mr-1">
                      Lesson 5.
                    </span>{" "}
                    Est, ut tempus id rutrum facilisi.
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-100">
                <div
                  onClick={() => setOpenIndex(openIndex === 5 ? -1 : 5)}
                  className="flex items-center py-5 cursor-pointer"
                >
                  <div className="mr-4 text-red-400">
                    {openIndex === 5 ? (
                      <FiMinus size={18} />
                    ) : (
                      <FiPlus size={18} />
                    )}
                  </div>
                  <div className="text-base font-bold text-gray-800">
                    <span className="opacity-60 font-medium mr-1">
                      Lesson 6.
                    </span>{" "}
                    Amet nec in pellentesque.
                  </div>
                </div>
              </div>
            </div>
          </div>


            <div>
              <img src="/illustration (2).png" alt="" className="" />
            </div>
        </div>
      </div>
    </div>
  );
}
