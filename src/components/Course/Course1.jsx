import React from 'react'

export default function Course1() {
  return (
    <div>
         <section className="bg-[#FFEFEC] ">
        <p className="text-[#FF3F3A] text-[20px] text-center">course</p>
        <h4 className='text-lg font-semibold text-[46px] ml-[150px] text-[#1E212C] max-w-[1020px] text-center text-gray-900'>User Experience. Principles of Human-Centered Design</h4>
      </section>


    <div className="font-sans text-[#1E212C]">
      {/* SECTION: Combined Course Details & Subscription */}
      <section className="bg-white">
        
        {/* 1. About the Course & Floating Card Area */}
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-black mb-8">About the course</h2>
              <p className="text-gray-600 leading-relaxed mb-12 max-w-2xl">
                Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus. Ut cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie.
              </p>
              
              <h3 className="text-2xl font-bold mb-6">You will learn:</h3>
              <ul className="space-y-4">
                {[
                  "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
                  "Vulputate placerat amet pulvinar lorem nisl.",
                  "Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.",
                  "Etiam duis lobortis in fames ultrices commodo nibh.",
                  "Fringilla in nec risus congue venenatis proin pasuere nec.",
                  "Cursus eu pretium, vulputate tempus quam massa sed at."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#FF4F12] mt-1 shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side: Floating Info Card */}
            <div className="lg:w-1/3 w-full">
              <div className="bg-white rounded-lg shadow-2xl shadow-gray-200 p-8 border border-gray-100 lg:sticky lg:top-10">
                <div className="space-y-8 mb-8">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1">Dates</p>
                    <p className="text-[#FF4F12] font-bold text-lg">Sept 7 – Nov 2</p>
                    <p className="text-xs text-gray-400 mt-1">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1">Duration</p>
                    <p className="text-[#FF4F12] font-bold text-lg">2 months – 8 lessons</p>
                    <p className="text-xs text-gray-400 mt-1">Rhoncus pellentesque auctor auctor orci vulputate faucibus quis at.</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1">Price</p>
                    <p className="text-[#FF4F12] font-bold text-lg">$120 per month</p>
                    <p className="text-xs text-gray-400 mt-1">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</p>
                  </div>
                </div>
                <button className="w-full bg-[#FF4F12] text-white font-bold py-4 rounded-md hover:bg-[#E04510] transition-colors">
                  Join the course
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Curator Section */}
        <div className="max-w-7xl mx-auto px-6 ml-[190px] py-20 flex flex-col md:flex-row gap-20 items-center">
          <div className="relative">
             {/* Decorative Circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-orange-100 rounded-full -z-10"></div>
            <div className="w-80 h-96 bg-[#FFCF2D] rounded-lg overflow-hidden relative">
              <img 
                src="/image (76).png" 
                alt="Cody Fisher" 
                className="w-full h-full object-cover grayscale mix-blend-multiply"
              />
            </div>
          </div>
          <div className="max-w-xl">
            <p className="text-[12px] uppercase font-bold tracking-widest text-gray-500 mb-2">Course Curator</p>
            <h2 className="text-4xl font-black mb-2">Cody Fisher</h2>
            <p className="text-gray-400 mb-8">Senior UX designer in IT Product Company</p>
            <div className="flex gap-8 mb-8 text-sm font-bold">
              <span className="flex items-center gap-2"><span className="text-[#FFCF2D] text-lg">★</span> 4.9 rate</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F12] text-lg">●</span> 4 courses</span>
              <span className="flex items-center gap-2"><span className="text-blue-500 text-lg">👥</span> 350 students</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">
              Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat.
            </p>
            <div className="flex gap-5 text-gray-400">
              {['facebook', 'behance', 'twitter', 'linkedin'].map(social => (
                <button key={social} className="hover:text-gray-900 transition-colors uppercase text-[10px] font-bold tracking-tighter">{social}</button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Online Learning Process */}
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[12px] uppercase font-bold tracking-widest text-gray-500 mb-2">Main Steps</p>
            <h2 className="text-4xl font-black">Online learning process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Dashed Connecting Line */}
            <div className="hidden md:block absolute top-5 left-0 w-full border-t-2 border-dashed border-gray-200 -z-10"></div>
            
            {[
              { id: "01", title: "Watching online video lectures", text: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt." },
              { id: "02", title: "Passing test", text: "Anim reprehenderit sint voluptate exercitation adipiscing laborum. Minim ad tempor est ea." },
              { id: "03", title: "Curator's feedback", text: "Adipisicing esse aliqua aliquip qui amet. Aut eiusmod dolore et ad veniam ad desinunt." },
              { id: "04", title: "Corrections if needed", text: "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.", highlight: true }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-6 bg-white border-2 ${step.highlight ? 'text-[#FF4F12] border-[#FF4F12] shadow-lg shadow-orange-100' : 'text-gray-300 border-transparent'}`}>
                  {step.id}
                </div>
                <h4 className="font-bold text-lg mb-3">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>


      </section>
    </div>
    </div>
  )
}
