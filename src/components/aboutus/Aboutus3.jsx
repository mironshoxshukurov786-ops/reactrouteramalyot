import React from 'react'

export default function Aboutus3() {
  return (
    <div className="w-full bg-white font-sans text-slate-900">
      
      {/* 1. LOGOTIPLAR SEKSIYASI */}
      <div className="bg-gray-50 py-20 px-4 text-center">
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Best jobs for you</span>
        <h2 className="text-3xl font-black mt-3 mb-12">Our students work here</h2>
        
        <div className="max-w-5xl mx-auto flex justify-center items-center opacity-60 hover:opacity-100 transition-opacity">
          <img 
            src="/logos.png" 
            alt="Partner Logos" 
            className="w-full h-auto object-contain max-h-24" 
          />
        </div>
      </div>

      {/* 2. BLOG SEKSIYASI */}
      <div className="max-w-7xl mx-auto py-24 px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Our Blog</span>
            <h2 className="text-4xl font-black mt-2">Latest posts</h2>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded font-bold text-sm transition-colors">
            Go to blog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden mb-4 bg-blue-100 aspect-[4/3] flex items-center justify-center">
              <span className="absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                🎙️ Podcast
              </span>
              <img src="/bilmadim.png" alt="Podcast" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex gap-4 text-[12px] text-gray-400 mb-2">
              <span>Marketing</span> | <span>September 4, 2020</span> | <span>🕒 36 min</span>
            </div>
            <h3 className="text-lg font-bold leading-tight group-hover:text-orange-600 transition-colors">
              What is traffic arbitrage and does it really make money?
            </h3>
            <p className="text-gray-500 text-sm mt-3 line-clamp-2">
              Phasellus, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus...
            </p>
            <button className="mt-4 flex items-center font-bold text-sm">Listen <span className="ml-2">→</span></button>
          </div>

          {/* Blog Card 2 - BU YERDA XATO BOR EDI (div yopilmagan edi) */}
          <div className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden mb-4 bg-emerald-100 aspect-[4/3] flex items-center justify-center">
              <span className="absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                🎬 Video
              </span>
              <img src="/nimadirda.png" alt="Video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex gap-4 text-[12px] text-gray-400 mb-2">
              <span>Management</span> | <span>August 25, 2020</span> | <span>🕒 45 min</span>
            </div>
            <h3 className="text-lg font-bold leading-tight group-hover:text-orange-600 transition-colors">
              What to do and who to talk to if you want to get feedback
            </h3>
            <p className="text-gray-500 text-sm mt-3 line-clamp-2">
              Neque a, senectus consectetuer odio. In aliquet nec eu. Ultricies ac nibh urna urna sagittis...
            </p>
            <button className="mt-4 flex items-center font-bold text-sm">Watch <span className="ml-2">→</span></button>
          </div>

          {/* Blog Card 3 */}
          <div className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden mb-4 bg-yellow-100 aspect-[4/3] flex items-center justify-center">
              <span className="absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                📄 Article
              </span>
        <img src="/image.png" />
            </div>
            <div className="flex gap-4 text-[12px] text-gray-400 mb-2">
              <span>Design</span> | <span>August 8, 2020</span>
            </div>
            <h3 className="text-lg font-bold leading-tight group-hover:text-orange-600 transition-colors">
              Should you choose a creative profession if you are attracted?
            </h3>
            <p className="text-gray-500 text-sm mt-3 line-clamp-2">
              Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate...
            </p>
            <button className="mt-4 flex items-center font-bold text-sm">Read <span className="ml-2">→</span></button>
          </div>
        </div>
      </div>

      {/* 3. SUBSCRIBE SEKSIYASI */}
      <div className="bg-orange-50 relative py-24 px-4 overflow-hidden flex items-center justify-center min-h-[400px]">
        {/* Dekorativ elementlar */}
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-red-200/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="absolute right-0 top-0 w-80 h-80 bg-orange-200/30 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">Don't miss anything</span>
          <h2 className="text-3xl md:text-4xl font-black mt-4 mb-10 leading-tight">
            Subscribe to the Createx School announcements
          </h2>
          
          <form className="flex flex-col sm:flex-row gap-0 items-center bg-white p-1 rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <input 
              type="email" 
              placeholder="Your working email" 
              className="w-full flex-grow px-6 py-3 focus:outline-none text-sm"
            />
            <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-10 py-3 font-bold whitespace-nowrap transition-colors text-sm rounded-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}