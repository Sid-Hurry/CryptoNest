import React from "react";

const About = () => {
  return (
    <main className="max-w-5xl mx-auto mt-24 px-4">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        About CryptoTrack
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-600 mb-10 max-w-3xl">
        CryptoTrack is a simple and intuitive cryptocurrency tracking platform
        that helps users monitor real-time crypto prices, market trends, and
        performance across different currencies.
      </p>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* What it does */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            What CryptoTrack Does
          </h2>
          <p className="text-gray-600 leading-relaxed">
            CryptoTrack allows you to explore top cryptocurrencies, view live
            price updates, analyze short-term price trends through charts, and
            switch between multiple fiat currencies such as USD, INR, and EUR.
            Each coin has a dedicated page with detailed market information.
          </p>
        </div>

        {/* Why it exists */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why CryptoTrack
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The goal of CryptoTrack is to provide a clean, fast, and distraction-
            free experience for users who want quick insights into the crypto
            market without unnecessary complexity.
          </p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Live cryptocurrency prices</li>
            <li>Top coins ranking</li>
            <li>Currency switching (USD / INR / EUR)</li>
            <li>Interactive price charts</li>
            <li>Search and explore individual coins</li>
          </ul>
        </div>

        {/* Tech stack */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Technology Used
          </h2>
          <p className="text-gray-600 leading-relaxed">
            CryptoTrack is built using modern web technologies including React,
            Tailwind CSS, React Router, and public cryptocurrency APIs to ensure
            real-time data accuracy and smooth performance.
          </p>
        </div>

      </div>

    </main>
  );
};

export default About;
