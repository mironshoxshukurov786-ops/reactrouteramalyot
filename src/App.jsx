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
      {/* ================= HEADER ================= */}
      <header className="bg-[#FFEFEC]">
        <div className="w-full mx-auto px-5 md:px-10 py-5 flex justify-between items-center">
          {/* LOGO + DESKTOP NAV */}
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

          {/* RIGHT ACTIONS */}
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

            {/* MOBILE MENU ICON */}
            <button
              onClick={() => setMenu(true)}
              className="md:hidden text-2xl text-[#424551]"
            >
              <IoMenuOutline />
            </button>
          </div>
        </div>
      </header>

  {/* ================= PREMIUM MOBILE MENU ================= */}
<div
  className={`fixed inset-0 z-40 transition ${
    menu ? "visible" : "invisible"
  }`}
>
  {/* BLUR OVERLAY */}
  <div
    onClick={() => setMenu(false)}
    className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
      menu ? "opacity-100" : "opacity-0"
    }`}
  ></div>

  {/* MENU PANEL */}
  <div
    className={`absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl p-7 transform transition-all duration-500 ease-out ${
      menu ? "translate-x-0 scale-100" : "translate-x-full scale-95"
    }`}
  >
    {/* HEADER */}
    <div className="flex justify-between items-center mb-10">
      <img src="/logo.png" alt="logo" className="w-28" />
      <button
        onClick={() => setMenu(false)}
        className="p-2 rounded-full hover:bg-red-50 transition"
      >
        <IoClose className="text-2xl text-gray-600 hover:text-red-500" />
      </button>
    </div>

    {/* LINKS */}
    <nav className="flex flex-col gap-6">
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
          className="group relative flex items-center justify-between text-[#424551] text-lg font-semibold transition-all"
        >
          <span className="relative">
            {item.name}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#FF7A1B] to-[#FF4242] transition-all duration-300 group-hover:w-full"></span>
          </span>

          <span className="text-xl opacity-0 translate-x-[-6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            →
          </span>
        </Link>
      ))}
    </nav>

    {/* DIVIDER */}
    <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

    {/* ACTION BUTTON */}
    <button
      onClick={() => {
        setMenu(false);
        setOpenLogin(true);
      }}
      className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#FF7A1B] to-[#FF4242] py-3 font-bold text-white shadow-lg transition hover:shadow-xl"
    >
      <span className="relative z-10">Log in / Register</span>
      <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100"></span>
    </button>

    {/* FOOTER */}
    <p className="mt-8 text-xs text-center text-gray-400">
      © 2026 Education Platform
    </p>
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
