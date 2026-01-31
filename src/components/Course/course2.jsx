import React, { useState } from 'react';

const EarlyBirdSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  // Xatoliklarni saqlash uchun state
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Foydalanuvchi yozishni boshlasa, o'sha inputdagi qizil xatoni yo'qotish
    if (value.trim() !== '') {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleJoinCourse = () => {
    // Tugma bosilganda bo'sh maydonlarni aniqlash
    const newErrors = {
      fullName: formData.fullName.trim() === '',
      email: formData.email.trim() === '',
      phone: formData.phone.trim() === ''
    };

    setErrors(newErrors);

    // Agar barcha maydonlar to'la bo'lsa, davom etish
    if (!newErrors.fullName && !newErrors.email && !newErrors.phone) {
      alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
    }
  };

  return (
    <section className="bg-[#FEE4D7] p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-end gap-8 font-sans">
      <div className="flex-1 w-full text-left">
        <h2 className="text-3xl font-black text-[#1E212C] mb-8">20% discount for early birds!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Ism familiya */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Full name</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full px-4 py-3 rounded-md border-2 transition-all outline-none text-sm bg-white ${
                errors.fullName ? 'border-red-500' : 'border-gray-300 focus:border-[#FF4D1C]'
              }`}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your working email"
              className={`w-full px-4 py-3 rounded-md border-2 transition-all outline-none text-sm bg-white ${
                errors.email ? 'border-red-500' : 'border-gray-300 focus:border-[#FF4D1C]'
              }`}
            />
          </div>

          {/* Telefon */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className={`w-full px-4 py-3 rounded-md border-2 transition-all outline-none text-sm bg-white ${
                errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-[#FF4D1C]'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Tugma va Taymer */}
      <div className="flex flex-col items-center md:items-end gap-6 shrink-0 w-full md:w-auto">
        <div className="flex gap-4 text-[#1E212C]">
          <div className="text-center"><p className="text-2xl font-black">06</p><p className="text-[10px] uppercase font-bold text-gray-500">Days</p></div>
          <div className="text-center"><p className="text-2xl font-black">18</p><p className="text-[10px] uppercase font-bold text-gray-500">Hours</p></div>
          <div className="text-center"><p className="text-2xl font-black">24</p><p className="text-[10px] uppercase font-bold text-gray-500">Mins</p></div>
          <div className="text-center"><p className="text-2xl font-black">12</p><p className="text-[10px] uppercase font-bold text-gray-500">Sec</p></div>
        </div>
        <button 
          onClick={handleJoinCourse}
          className="bg-[#FF4D1C] hover:bg-[#E64419] text-white font-bold py-4 px-12 rounded-md shadow-lg shadow-orange-200 transition-all w-full md:w-auto"
        >
          Join the course
        </button>
      </div>
    </section>
  );
};

export default EarlyBirdSection;