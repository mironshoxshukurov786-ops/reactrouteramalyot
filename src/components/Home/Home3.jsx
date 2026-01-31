import React from "react";

export default function Home3() {
  return (
    <section className="relative w-full bg-[#F8F9FA] py-20 px-6 overflow-hidden font-sans">
      

      <div className="absolute -top-10 -left-10 opacity-20">
        <div className="w-40 h-40 border border-gray-400 rounded-full flex items-center justify-center">
          <div className="w-28 h-28 border border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 border border-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-16 -right-16 opacity-20">
        <div className="w-64 h-64 border border-gray-400 rounded-full flex items-center justify-center">
          <div className="w-48 h-48 border border-gray-400 rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 opacity-10 grid grid-cols-6 gap-2">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl font-black text-[#1A202C]">
            What our students say
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          
          <button className="hidden md:block absolute left-0 text-gray-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </button>

      
          <div className="bg-white shadow-2xl shadow-gray-200/60 rounded-sm p-10 md:p-16 w-full max-w-4xl flex flex-col md:flex-row gap-8 items-start">
            
            <div className="text-[#FF4D4D] mt-1 shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 21v-3c0-1.1.9-2 2-2h3c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v3c0 .6-.4 1-1 1h-2V4h10v11c0 2.2-1.8 4-4 4h-3v2ZM3 21v-3c0-1.1.9-2 2-2h3c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v3c0 .6-.4 1-1 1H0V4h10v11c0 2.2-1.8 4-4 4H3v2Z" />
              </svg>
            </div>

            <div className="flex-1">
              <p className="text-[#4A5568] leading-relaxed text-[15px] mb-8 italic">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus
                quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi.
                Vitae id turpis tempus ornare turpis quis non.”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80"
                  alt="Eleanor Pena"
                  className="w-12 h-12 rounded-full object-cover grayscale"
                />
                <div>
                  <h4 className="font-bold text-[#1A202C] text-sm">
                    Eleanor Pena
                  </h4>
                  <p className="text-xs text-gray-500">
                    Position, Course
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="absolute -right-4 md:-right-6 w-12 h-12 bg-[#FF4D4D] rounded-full flex items-center justify-center text-white shadow-lg">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          <div className="h-1 w-8 bg-[#4A5568] rounded-full"></div>
          <div className="h-1 w-4 bg-gray-300 rounded-full"></div>
          <div className="h-1 w-4 bg-gray-300 rounded-full"></div>
          <div className="h-1 w-4 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
