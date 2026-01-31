import React, { useState } from 'react';

export default function Contact1() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agree: false
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Tekshirish mantiqi
    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.email || !formData.email.includes('@')) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (!formData.message) newErrors.message = true;
    if (!formData.agree) newErrors.agree = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Xabar muvaffaqiyatli yuborildi!");
      // Bu yerda API ga yuborish mumkin
    }
  };

  const inputClass = (name) => `
    w-full px-4 py-3 rounded-lg border transition-all outline-none
    ${errors[name] ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-orange-500'}
  `;

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 font-sans text-slate-900">
      
      {/* 1. GET IN TOUCH SEKSIYASI */}
      <div className="flex flex-col lg:flex-row gap-12 mb-32">
        <div className="flex-1">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Contact info</span>
          <h2 className="text-4xl font-black mt-2 mb-10">Get in touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-orange-600 mt-1">📧</span>
              <div>
                <p className="text-xs font-bold text-gray-400">Talk to us:</p>
                <p className="font-medium">hello@createx.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-orange-600 mt-1">📞</span>
              <div>
                <p className="text-xs font-bold text-gray-400">Call us:</p>
                <p className="font-medium">(405) 555-0128</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-orange-600 mt-1">📍</span>
              <div>
                <p className="text-xs font-bold text-gray-400">Address:</p>
                <p className="font-medium">2464 Royal Ln. Mesa, New Jersey 45463, USA</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Follow us:</p>
            <div className="flex gap-4 text-xl text-gray-600">
              <a href="#" className="hover:text-orange-600 transition-colors">facebook</a>
              <a href="#" className="hover:text-orange-600 transition-colors">twitter</a>
              <a href="#" className="hover:text-orange-600 transition-colors">instagram</a>
              <a href="#" className="hover:text-orange-600 transition-colors">linkedin</a>
            </div>
          </div>
        </div>

        {/* Xarita (Map Placeholder) */}
        <div className="flex-1 h-80 bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
           <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800" 
            className="w-full h-full object-cover opacity-50 grayscale" 
            alt="Map"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-8 h-8 bg-orange-600 rounded-full animate-ping opacity-75"></div>
             <div className="w-4 h-4 bg-orange-600 rounded-full absolute"></div>
          </div>
        </div>
      </div>

      {/* 2. DROP US A LINE SEKSIYASI */}
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="hidden lg:block flex-1">
          <img 
            src="https://illustrations.popsy.co/orange/support.svg" 
            alt="Support Illustration" 
            className="w-full max-w-md mx-auto"
          />
        </div>

        <div className="flex-[1.5] w-full">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Any questions?</span>
          <h2 className="text-4xl font-black mt-2 mb-10">Drop us a line</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-700">First Name*</label>
                <input 
                  type="text" 
                  placeholder="Your first name"
                  className={inputClass('firstName')}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Last Name*</label>
                <input 
                  type="text" 
                  placeholder="Your last name"
                  className={inputClass('lastName')}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Email*</label>
                <input 
                  type="email" 
                  placeholder="Your working email"
                  className={inputClass('email')}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Phone*</label>
                <input 
                  type="text" 
                  placeholder="Your phone number"
                  className={inputClass('phone')}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700">Message*</label>
              <textarea 
                rows="4" 
                placeholder="Your message"
                className={inputClass('message')}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                id="agree"
                className={`mt-1.5 h-4 w-4 accent-orange-600 ${errors.agree ? 'outline outline-2 outline-red-500' : ''}`}
                onChange={(e) => setFormData({...formData, agree: e.target.checked})}
              />
              <label htmlFor="agree" className={`text-sm ${errors.agree ? 'text-red-500' : 'text-gray-600'}`}>
                I agree to receive communications from Createx Online School
              </label>
            </div>

            <button 
              type="submit"
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 rounded-lg font-bold transition-all active:scale-95"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}