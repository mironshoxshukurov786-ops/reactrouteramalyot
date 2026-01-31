import React from "react";

export default function AboutUs1() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* TOP */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm text-gray-400 uppercase mb-2">About us</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Creatx Online School
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Creatx Online School is a leader in online studying. We have lots of
            courses and programs from the main market experts.
          </p>

          <p className="text-gray-500 mb-8">
            We provide relevant approaches to online learning, internships and
            employment in the largest companies around the world.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition">
              Explore events
            </button>
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Browse courses
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/illustration (8).png"
            className="w-full max-w-md"
            alt=""
          />
        </div>
      </div>

      {/* VIDEO + STATS */}
      <div className="grid lg:grid-cols-2 gap-24 items-center mt-24">
        <div className="relative">
          <img
            src="/image (77).png"
            className="rounded-xl"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg cursor-pointer hover:scale-105 transition">
              ▶
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Stat number="1200" text="students graduated" />
          <Stat number="84" text="completed courses" />
          <Stat number="16" text="qualified tutors" />
          <Stat number="5" text="years of experience" />
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="mt-28 text-center">
        <p className="text-sm text-gray-400 uppercase mb-2">
          We always stand for
        </p>
        <h2 className="text-3xl font-bold mb-14">Our core values</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Value
            icon="/ic-structure.png"
            title="Structured Approach"
            desc="Aenean urna dictum adipiscing nec, cras quisque nunc."
          />
          <Value
            icon="/ic-chat.png"
            title="Professional Feedback"
            desc="Quam faucibus commodo ac facilisis."
          />
          <Value
            icon="/ic-target.png"
            title="Efficiency"
            desc="Viverra scelerisque consequat net."
          />
          <Value
            icon="/ic-calendar.png"
            title="Flexible Schedule"
            desc="Sed ut perspiciatis unde omnis."
          />
        </div>
      </div>
    </section>
  );
}

/* COMPONENTS */

function Stat({ number, text }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-4xl font-bold text-red-500">{number}</span>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function Value({ icon, title, desc }) {
  return (
    <div className="p-8 border rounded-xl text-center hover:shadow-xl transition group">
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition">
        <img
          src={icon}
          className="w-8 h-8 object-contain"
          alt=""
        />
      </div>

      <h3 className="font-semibold text-lg mb-2 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
