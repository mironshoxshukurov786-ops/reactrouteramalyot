import React from "react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaTelegramPlane, 
  FaInstagram, 
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegEnvelope,
  FaArrowRight,
  FaRegHeart
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#1E212C] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
   
          <div className="space-y-6">
<img 
  src="/logo.png" 
  alt="Createx Logo" 
  className="h-8 invert brightness-0 invert" 
/>            <p className="text-gray-400 text-sm leading-relaxed opacity-60">
              Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.
            </p>
            <div className="flex gap-x-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaYoutube />} />
              <SocialIcon icon={<FaTelegramPlane />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaLinkedinIn />} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold tracking-wider mb-4 uppercase">Site Map</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition">About Us</li>
                <li className="hover:text-white cursor-pointer transition">Courses</li>
                <li className="hover:text-white cursor-pointer transition">Events</li>
                <li className="hover:text-white cursor-pointer transition">Blog</li>
                <li className="hover:text-white cursor-pointer transition">Contacts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold tracking-wider mb-4 uppercase">Courses</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition">Marketing</li>
                <li className="hover:text-white cursor-pointer transition">Management</li>
                <li className="hover:text-white cursor-pointer transition">HR & Recruiting</li>
                <li className="hover:text-white cursor-pointer transition">Design</li>
                <li className="hover:text-white cursor-pointer transition">Development</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-bold tracking-wider mb-4 uppercase">Contact Us</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center gap-x-3">
                <FaPhoneAlt className="text-gray-500" />
                <span>(405) 555-0128</span>
              </div>
              <div className="flex items-center gap-x-3">
                <FaRegEnvelope className="text-gray-500" />
                <span>hello@createx.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold tracking-wider mb-4 uppercase">Sign up to our newsletter</h4>
            <div className="relative mb-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/10 border border-white/20 rounded-[4px] py-2.5 px-4 text-sm focus:outline-none focus:border-[#FF4242] transition"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-[#FF4242]">
                <FaArrowRight />
              </button>
            </div>
            <p className="text-[10px] text-gray-500 leading-tight">
              *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-400">
          <div className="flex items-center gap-x-1">
            <span>© All rights reserved. Made with</span>
            <FaRegHeart className="text-[#FF4242]" />
            <span>by Createx Studio</span>
          </div>
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="uppercase font-bold tracking-widest hover:text-white transition mt-4 md:mt-0"
          >
            Go to top
          </button>
        </div>
      </div>
    </footer>
  );
}


function SocialIcon({ icon }) {
  return (
    <a href="#" className="text-gray-500 hover:text-white transition text-lg">
      {icon}
    </a>
  );
}