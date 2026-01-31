import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Events() {
  const [requestData, setRequestData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setRequestData({
      ...requestData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();

    if (!requestData.name || !requestData.email || !requestData.phone) {
      toast.error("Please fill in all fields ❌");
      return;
    }

    toast.success("Request sent successfully 🎉");

    setRequestData({
      name: "",
      email: "",
      phone: "",
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Subscribed to newsletter 📩");
  };

  return (
    <div className="bg-white text-gray-800">
      <Toaster position="top-center" reverseOrder={false} />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-[#FEECE8] rounded-xl flex flex-col lg:flex-row items-center justify-between p-8 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Don’t want to miss the best events?
            </h2>
            <p className="mb-4 text-sm">
              Subscribe to our newsletter!
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Your working email"
                className="px-4 py-2 rounded-md w-64 outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-md"
              >
                Subscribe
              </button>
            </form>

            <label className="flex items-center gap-2 mt-3 text-xs">
              <input type="checkbox" required />
              I agree to receive communications
            </label>
          </div>

          <img
            src="/illustration (5).png"
            alt="newsletter"
            className="w-60"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs uppercase text-gray-400 mb-2">
            Don’t miss the event
          </p>
          <h2 className="text-3xl font-bold mb-6">Leave a request</h2>

          <form onSubmit={handleRequestSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={requestData.name}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full border px-4 py-3 rounded-md"
            />

            <input
              type="email"
              name="email"
              value={requestData.email}
              onChange={handleChange}
              placeholder="Your working email"
              className="w-full border px-4 py-3 rounded-md"
            />

            <input
              type="tel"
              name="phone"
              value={requestData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full border px-4 py-3 rounded-md"
            />

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-md"
            >
              Join the event
            </button>

            <p className="text-xs text-gray-400">
              * You will receive a link to the online lecture after registration.
            </p>
          </form>
        </div>

        <img
          src="/illustration (6).png"
          alt="request"
          className="w-full max-w-md mx-auto"
        />
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">
            You may be interested in
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                date: "05 Aug",
                title: "Formation of the organizational structure",
                time: "11:00 – 14:00",
              },
              {
                date: "24 Jul",
                title: "Building a customer service department",
                time: "11:00 – 12:30",
              },
              {
                date: "10 Jul",
                title: "Find and evaluate candidates",
                time: "9:00 – 14:00",
              },
            ].map((event, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="text-orange-500 font-bold mb-2">
                  {event.date}
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  {event.time}
                </p>
                <h3 className="font-semibold mb-4">
                  {event.title}
                </h3>
                <button
                  onClick={() => toast("Event details coming soon 👀")}
                  className="text-orange-500 border border-orange-500 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition"
                >
                  View more
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => toast("More events loading 🚀")}
              className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition"
            >
              Explore all events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
