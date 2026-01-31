import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    type: "Podcast",
    emoji: "🎙️",
    date: "September 4, 2018",
    time: "36 min",
    title: "What is traffic arbitrage and does it really make money?",
    desc: "Posuere urna nec tincidunt praesent semper feugiat nibh sed.",
    action: "Listen",
    bg: "bg-blue-100",
  },
  {
    type: "Article",
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400",
    date: "September 1, 2018",
    time: "12 min",
    title: "How to choose the first programming language for a beginner",
    desc: "Turpis eget at magna tempor gravida condimentum tortor.",
    action: "Read",
  },
  {
    type: "Video",
    emoji: "🎬",
    date: "August 3, 2019",
    time: "45 min",
    title: "Should you choose a creative profession?",
    desc: "Eu vulputate nisl torquam ornare accumsan vestibulum.",
    action: "Watch",
    bg: "bg-yellow-100",
  },
  {
    type: "Article",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    date: "August 24, 2019",
    time: "23 min",
    title: "HR statistics: job search, interviews, hiring and recruiting",
    desc: "Massa enim nec dui nunc mattis enim.",
    action: "Read",
  },
  {
    type: "Video",
    emoji: "🎬",
    date: "August 2, 2019",
    time: "12 min",
    title: "What to do if you want feedback on the product",
    desc: "Neque a suspendisse consectetur sodales vitae.",
    action: "Watch",
    bg: "bg-green-100",
  },
  {
    type: "Podcast",
    emoji: "🎙️",
    date: "July 26, 2020",
    time: "36 min",
    title: "What are color profiles in graphic design",
    desc: "Aliquam vestibulum hendrerit ipsum sollicitudin.",
    action: "Listen",
    bg: "bg-purple-100",
  },
  {
    type: "Video",
    emoji: "🎬",
    date: "July 15, 2020",
    time: "45 min",
    title: "Startup: how to build a team that survives",
    desc: "Nisl, molestie ut faucibus et etiam.",
    action: "Watch",
    bg: "bg-pink-100",
  },
  {
    type: "Article",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
    date: "July 7, 2020",
    time: "23 min",
    title: "How to get customers to love your business",
    desc: "Malesuada in augue ut feugiat morbi.",
    action: "Read",
  },
];

export default function Blog2() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-lg overflow-hidden border shadow-sm hover:shadow-lg transition"
            >
              {item.img ? (
                <img
                  src={item.img}
                  alt=""
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div
                  className={`h-48 flex items-center justify-center text-5xl ${item.bg}`}
                >
                  {item.emoji}
                </div>
              )}

              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">{item.type}</div>

                <div className="flex gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {item.time}
                  </span>
                </div>

                <h3 className="font-semibold mb-3 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {item.desc}
                </p>

                <button className="flex items-center gap-2 text-sm hover:text-blue-600 transition">
                  {item.action}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          <button className="w-8 h-8 rounded hover:bg-gray-100">1</button>
          <button className="w-8 h-8 rounded bg-blue-600 text-white">2</button>
          <button className="w-8 h-8 rounded hover:bg-gray-100">3</button>
          <button className="w-8 h-8 rounded hover:bg-gray-100">→</button>
        </div>
      </div>
    </div>
  );
}
