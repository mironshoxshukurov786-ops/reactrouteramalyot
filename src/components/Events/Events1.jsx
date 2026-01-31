import React, { useState } from 'react';
import { Plus, Minus, CheckCircle, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const EventLandingPage = () => {
  const [openTheme, setOpenTheme] = useState(0);
  const [agreed, setAgreed] = useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!agreed) {
      setError("I agree to receive communications from Createx Online School");
      return;
    }
    
    setError("");
    alert("Subscribed successfully!");
  };

  return (
    <div className="bg-white font-sans text-[#1E212C]">
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-black mb-10">We will talk about:</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-100 pb-4">
              <div 
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => setOpenTheme(openTheme === 0 ? -1 : 0)}
              >
                {openTheme === 0 ? <Minus className="text-red-500" size={16}/> : <Plus className="text-red-500" size={16}/>}
                <span className="font-bold"><span className="text-red-500 opacity-60 mr-2">Theme 1.</span> Aliquet lectus urna viverra in odio.</span>
              </div>
              {openTheme === 0 && (
                <div className="pl-8 pt-4 text-sm text-gray-500 leading-relaxed max-w-lg">
                  Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisis curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 py-2 border-b border-gray-100">
              <Plus className="text-red-500" size={16}/>
              <span className="font-bold"><span className="text-red-500 opacity-60 mr-2">Theme 2.</span> Orci commodo, viverra orci mollis ut euismod.</span>
            </div>
            <div className="flex items-center gap-4 py-2 border-b border-gray-100">
              <Plus className="text-red-500" size={16}/>
              <span className="font-bold"><span className="text-red-500 opacity-60 mr-2">Theme 3.</span> Sagittis vitae facilisi rutrum amet mauris quisque vel.</span>
            </div>
            <div className="flex items-center gap-4 py-2">
              <Plus className="text-red-500" size={16}/>
              <span className="font-bold"><span className="text-red-500 opacity-60 mr-2">Theme 4.</span> In id dolor quis nunc, urna hendrerit pharetra.</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-sm shadow-2xl border border-gray-50">
          <div className="mb-6">
            <div className="text-[10px] font-black uppercase tracking-widest mb-1 text-gray-400">Time</div>
            <div className="text-lg font-bold text-red-500">August 5, 11:00 – 14:00</div>
            <div className="text-xs text-gray-400">Metus turpis sit lorem lacus, in elit tellus lacus.</div>
          </div>
          <div className="mb-8">
            <div className="text-[10px] font-black uppercase tracking-widest mb-1 text-gray-400">Price</div>
            <div className="text-lg font-bold">Free</div>
            <div className="text-xs text-gray-400">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique nisl.</div>
          </div>
          <button className="text-xs font-bold text-red-500 uppercase tracking-widest border-b-2 border-red-500 pb-1 mb-8 hover:text-red-600 transition-colors">
            Event on Facebook
          </button>
          <button className="w-full bg-[#FF421D] text-white py-4 rounded font-bold text-sm shadow-lg shadow-red-200 hover:bg-[#e33a18] transition-colors">
            Join the event
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-yellow-100 rounded-full -z-10" />
          <div className="bg-yellow-400 rounded-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Kathryn Murphy" 
              className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
        <div>
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Speaker</div>
          <h2 className="text-4xl font-black mb-2">Kathryn Murphy</h2>
          <p className="text-gray-500 mb-8">Analyst and Marketing specialist in IT company</p>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
            Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus, sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra.
          </p>
          <div className="flex gap-8 opacity-40 mb-10 grayscale">
            <div className="text-sm font-bold italic">Del Mar Strategy</div>
            <div className="text-sm font-bold italic">SENTINEL CONSULTING</div>
            <div className="text-sm font-bold italic">NATIONAL</div>
          </div>
          <div className="flex gap-4 text-gray-400">
            <Facebook size={18} className="cursor-pointer hover:text-red-500" />
            <Instagram size={18} className="cursor-pointer hover:text-red-500" />
            <Twitter size={18} className="cursor-pointer hover:text-red-500" />
            <Linkedin size={18} className="cursor-pointer text-red-500" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        <div>
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">For whom?</div>
          <h2 className="text-4xl font-black leading-tight">Who will benefit from <br/> the event:</h2>
        </div>
        <div className="space-y-6 pt-4">
          <div className="flex gap-4 items-start">
            <CheckCircle className="text-red-500 mt-1 flex-shrink-0" size={16}/>
            <span className="text-gray-600 font-medium">Specialists with more than 1 year of active work experience</span>
          </div>
          <div className="flex gap-4 items-start">
            <CheckCircle className="text-red-500 mt-1 flex-shrink-0" size={16}/>
            <span className="text-gray-600 font-medium leading-relaxed">Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces</span>
          </div>
          <div className="flex gap-4 items-start">
            <CheckCircle className="text-red-500 mt-1 flex-shrink-0" size={16}/>
            <span className="text-gray-600 font-medium">Professional designers who want to feel more confident in UX</span>
          </div>
        </div>
      </div>


    </div>
  );
};

export default EventLandingPage;