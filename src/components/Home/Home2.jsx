import React from 'react'

export default function Home2() {
  return (
    <div>
      <section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">
    <p className="text-sm uppercase text-gray-400 font-semibold text-center">
      Best tutors are all here
    </p>
    <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
      Meet our team
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* member */}
      <div className="text-center">
        <div className="bg-yellow-400 rounded-lg overflow-hidden">
          <img src="/bilmaymjan.png" />
        </div>
        <h4 className="mt-4 font-semibold text-gray-900">
          Dianne Russell
        </h4>
        <p className="text-sm text-gray-500">Founder & CEO</p>
      </div>

      <div className="text-center">
        <div className="bg-yellow-400 rounded-lg overflow-hidden">
          <img src="/nimadir1.svg" />
        </div>
        <h4 className="mt-4 font-semibold text-gray-900">
          Jerome Bell
        </h4>
        <p className="text-sm text-gray-500">Founder & Program Director</p>
      </div>

      <div className="text-center">
        <div className="bg-yellow-400 rounded-lg overflow-hidden">
          <img src="/nimadir.png" />
        </div>
        <h4 className="mt-4 font-semibold text-gray-900">
          Kristin Watson
        </h4>
        <p className="text-sm text-gray-500">Marketing Curator</p>
      </div>

      <div className="text-center">
        <div className="bg-yellow-400 rounded-lg overflow-hidden">
          <img src="/nimadir3.png" />
        </div>
        <h4 className="mt-4 font-semibold text-gray-900">
          Marvin McKinney
        </h4>
        <p className="text-sm text-gray-500">PM, Curator</p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
