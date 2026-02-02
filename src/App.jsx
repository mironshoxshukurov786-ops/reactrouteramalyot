import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { IoClose, IoMenuOutline } from "react-icons/io5";

import Home from "./pages/home";
import AboutUs from "./pages/About us";
import Course from "./pages/Course";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";

export default function App() {
  const [openLogin, setOpenLogin] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-white font-sans min-h-screen">

      <header className="bg-[#FFEFEC]">
        <div className="w-full mx-auto px-5 md:px-10 py-5 flex justify-between items-center">
          <div className="flex items-center gap-x-14">
            <Link to="/">
              <img src="/logo.png" alt="logo" className="w-32" />
            </Link>

            <nav className="hidden md:flex gap-x-8">
              {[
                { name: "About Us", path: "/aboutus" },
                { name: "Courses", path: "/course" },
                { name: "Events", path: "/event" },
                { name: "Blog", path: "/blog" },
                { name: "Contacts", path: "/contact" },
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="text-[#424551] font-bold text-sm hover:text-[#FF4242] transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>



          <div className="flex items-center gap-x-6">
            <button className="hidden md:block bg-linear-to-r from-[#FF7A1B] to-[#FF4242] text-white px-8 py-3 rounded-sm font-bold text-sm hover:shadow-lg transition">
              Get consultation
            </button>

            <div
              onClick={() => setOpenLogin(true)}
              className="hidden md:flex items-center gap-x-2 cursor-pointer group"
            >
              <FiUser className="text-xl text-[#424551] group-hover:text-[#FF4242]" />
              <span className="text-[#424551] font-bold text-sm group-hover:text-[#FF4242]">
                Log in / Register
              </span>
            </div>

            <button
              onClick={() => setMenu(true)}
              className="md:hidden text-2xl text-[#424551]"
            >
              <IoMenuOutline />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition ${
          menu ? "visible" : "invisible"
        }`}
      >
        
        <div
          onClick={() => setMenu(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            menu ? "opacity-100" : "opacity-0"
          }`}
        ></div>

       
        <div
          className={`absolute top-0 right-0 h-full w-[280px] bg-white shadow-xl p-6 transform transition-transform duration-300 ${
            menu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <img src="/logo.png" alt="logo" className="w-28" />
            <IoClose
              onClick={() => setMenu(false)}
              className="text-2xl cursor-pointer text-gray-600 hover:text-red-500"
            />
          </div>

          <nav className="flex flex-col gap-5">
            {[
              { name: "About Us", path: "/aboutus" },
              { name: "Courses", path: "/course" },
              { name: "Events", path: "/event" },
              { name: "Blog", path: "/blog" },
              { name: "Contacts", path: "/contact" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.path}
                onClick={() => setMenu(false)}
                className="text-[#424551] font-semibold hover:text-[#FF4242]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => {
              setMenu(false);
              setOpenLogin(true);
            }}
            className="mt-10 w-full bg-linear-to-r from-[#FF7A1B] to-[#FF4242] text-white py-3 rounded-md font-bold"
          >
            Log in / Register
          </button>
        </div>
      </div>

      {/* ================= LOGIN MODAL ================= */}
      {openLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={() => setOpenLogin(false)}
            className="absolute inset-0 bg-black/40"
          ></div>

          <div className="relative bg-white w-full max-w-md rounded-lg shadow-xl p-8">
            <button
              onClick={() => setOpenLogin(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">Sign in</h2>
            <p className="text-sm text-gray-500 text-center mb-6">
              Use your email and password to sign in
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-bold">
                Sign in
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= ROUTES ================= */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/course" element={<Course />} />
          <Route path="/event" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
}
