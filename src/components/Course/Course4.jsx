import React from "react";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="flex-1">
          <img
            src="/illustration (3).png"
            alt="Illustration"
            className="w-full max-w-md"
          />
        </div>

        <div className="flex-1 bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <p className="text-sm text-gray-500 mb-2">
            LEAVE A REQUEST NOW AND GET 20% OFF!
          </p>
          <h2 className="text-2xl font-bold mb-6">Register for the course</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Your working email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition">
              Join the course
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-700 mb-6">
          CHECK OTHER COURSES
        </h3>
        <h2 className="text-2xl font-bold mb-8">You may also like</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <img src="/ee.png" alt="Course" className="w-24 h-24 rounded-lg" />
            <div>
              <span className="text-xs text-green-500 font-semibold">
                Marketing
              </span>
              <h3 className="text-lg font-bold mt-1">
                The Ultimate Google Ads Training Course
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                $100 | by Jerome Bell
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <img src="/rr.png" alt="Course" className="w-24 h-24 rounded-lg" />
            <div>
              <span className="text-xs text-blue-500 font-semibold">
                Management
              </span>
              <h3 className="text-lg font-bold mt-1">
                Product Management Fundamentals
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                $480 | by Marvin McKinney
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition">
            View all courses
          </button>
        </div>
      </div>
    </div>
  );
}
