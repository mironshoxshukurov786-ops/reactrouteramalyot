import React from 'react'

export default function Home4() {
  return (
    <div>
        <section className="py-20">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-4xl font-bold text-gray-900">
        Latest posts
      </h2>
      <button className="bg-red-500 text-white px-5 py-2 rounded-md">
        Go to blog
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img src="/bilmadim.png" />
        <div className="p-5">
          <p className="text-sm text-gray-400">Marketing | July 2, 2023</p>
          <h4 className="mt-2 font-semibold text-gray-900">
            What is traffic arbitrage and does it really make money?
          </h4>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img src="/nimadirda.png" />
        <div className="p-5">
          <p className="text-sm text-gray-400">Management | July 5, 2023</p>
          <h4 className="mt-2 font-semibold text-gray-900">
            What to do and not to do to improve feedback
          </h4>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img src="/image.png" />
        <div className="p-5">
          <p className="text-sm text-gray-400">Design | July 8, 2023</p>
          <h4 className="mt-2 font-semibold text-gray-900">
            Should you choose a creative profession?
          </h4>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="relative w-full bg-[#FEE4D7] py-20 px-6 overflow-hidden flex flex-col items-center justify-center font-sans min-h-[400px]">
      
      {/* Left Illustration Placeholder */}
      <div className="absolute bottom-0 left-0 w-1/4 max-w-[250px] hidden md:block">
        {/* Replace with <img src="/path-to-graduation-illustration.png" /> */}
        <div className="w-full h-48 bg-contain bg-no-repeat bg-bottom opacity-80" 
             style={{ backgroundImage: 'url("https://ouch-cdn2.icons8.com/6lYV3K3o_x2x9YQyL5v-8n2uT8_K0j5vN5C0rS0vI_Y/rs:fit:368:276/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjIv/ZTM2YmJlYTQtMGM2/Yy00ZjVkLTk0YmYt/MjU1YjVjZDkyYjQ3/LnN2Zw.png")' }}>
        </div>
      </div>

      {/* Right Illustration Placeholder */}
      <div className="absolute bottom-0 right-0 w-1/4 max-w-[250px] hidden md:block">
        {/* Replace with <img src="/path-to-graduation-illustration.png" /> */}
        <div className="w-full h-48 bg-contain bg-no-repeat bg-bottom opacity-80 scale-x-[-1]" 
             style={{ backgroundImage: 'url("https://ouch-cdn2.icons8.com/6lYV3K3o_x2x9YQyL5v-8n2uT8_K0j5vN5C0rS0vI_Y/rs:fit:368:276/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjIv/ZTM2YmJlYTQtMGM2/Yy00ZjVkLTk0YmYt/MjU1YjVjZDkyYjQ3/LnN2Zw.png")' }}>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <p className="text-[13px] font-bold tracking-[0.15em] text-[#1E212C] uppercase mb-4">
          Don't miss anything
        </p>
        
        <h2 className="text-3xl md:text-4xl font-black text-[#1E212C] leading-tight mb-10">
          Subscribe to the Createx School announcements
        </h2>

        {/* Form Group */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-0 w-full max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your working email" 
            className="flex-1 px-5 py-3 rounded-t-md sm:rounded-l-md sm:rounded-tr-none border-none outline-none text-gray-700 placeholder:text-gray-400 text-sm shadow-sm"
          />
          <button className="bg-[#FF4D1C] hover:bg-[#e64419] transition-colors text-white font-bold text-sm px-8 py-3 rounded-b-md sm:rounded-r-md sm:rounded-bl-none shadow-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    </div>
  )
}
