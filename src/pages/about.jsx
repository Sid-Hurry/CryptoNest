import React, { useState } from "react";
import logo from "../assets/logo.png";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-gray-300 rounded-lg px-5 py-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <p className="font-medium text-gray-900">
          {question}
        </p>

        <span
          className={`transform transition-transform duration-300 ${
            open ? "rotate-90" : "rotate-0"
          }`}
        >
          ▶
        </span>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-sm text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 text-gray-800">

      {/* Logo + Intro */}
      <div className="text-center mb-16">
        <img
          src={logo}
          alt="Cryptonest Logo"
          className="mx-auto w-28 mb-8"
        />

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Cryptonest is a simple and powerful cryptocurrency tracking platform
          that helps you monitor live prices explore market trends and analyze
          digital assets with clarity and confidence. Whether you are checking
          prices casually or following the market closely Cryptonest keeps
          everything clean fast and accessible.
        </p>

        <p className="mt-8 font-semibold text-gray-900">
          Curious to explore the crypto market Just start tracking your favorite coins
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">
            Live Market Data
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            View real time cryptocurrency prices with up to date market
            information presented in a clean and easy to understand format.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">
            Detailed Coin Insights
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Explore individual coin pages with price changes market cap volume
            and interactive charts to better understand performance.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">
            Currency Flexibility
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Switch between USD INR and EUR seamlessly to view prices in the
            currency that matters most to you.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">
            Simple and Fast
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Cryptonest is built for speed and simplicity ensuring smooth
            navigation and a distraction free experience across all devices.
          </p>
        </div>

      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <FAQItem
            question="Is Cryptonest free to use"
            answer="Yes Cryptonest is completely free and does not require any subscription or payment."
          />

          <FAQItem
            question="Do I need to create an account"
            answer="No account or sign up is required You can start tracking cryptocurrencies instantly."
          />

          <FAQItem
            question="Where does the market data come from"
            answer="Cryptonest uses reliable public cryptocurrency APIs to fetch accurate and up to date market information."
          />

          <FAQItem
            question="Can I search for specific coins"
            answer="Yes you can search and explore individual cryptocurrencies easily using the built in search feature."
          />

        </div>
      </div>
       <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/Sid-Hurry/CryptoNest"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              px-6 py-3
              rounded-lg
              border border-gray-300
              font-medium text-gray-900
              hover:bg-gray-100
              transition
            "
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .1.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.1-.4 3-.1 3-.1.6 1.5.2 2.6.1 2.9.8.8 1.2 1.8 1.2 3 0 4.3-2.6 5.3-5.1 5.6.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
            View GitHub Repository
          </a>
        </div>

    </main>
  );
};

export default About;
