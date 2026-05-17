import React, { useState } from "react";
import logo from "../assets/logo.png";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="rounded-xl px-5 py-4 cursor-pointer transition glass-panel shadow-sm hover:shadow-md"
    >
      <div className="flex justify-between items-center gap-4">
        <p className="font-medium text-foreground">
          {question}
        </p>
        <span
          className={`transition-transform duration-300 text-muted ${
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
        <div
          className="overflow-hidden text-sm leading-relaxed text-muted"
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, desc }) => (
  <div
    className="rounded-xl p-6 h-full glass-panel shadow-sm"
  >
    <h3 className="font-semibold mb-2 text-foreground">
      {title}
    </h3>
    <p className="text-sm leading-relaxed text-muted">
      {desc}
    </p>
  </div>
);

const About = () => {
  return (
    <main className="px-4 text-foreground relative z-10">
      <div className="max-w-6xl mx-auto pt-24 pb-16">

        {/* Logo + Intro */}
        <div className="mb-20 border-b border-white/10 pb-10 flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Cryptonest Logo"
            className="w-16 md:w-20 mb-6"
          />
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 block">Platform Information</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted">
            About Cryptonest
          </h1>

          <p
            className="mt-4 text-lg max-w-3xl leading-relaxed text-muted"
          >
            Cryptonest is a modern cryptocurrency tracking platform designed to
            give you clear, fast, and reliable insights into the crypto market.
            From live prices to market trends and detailed coin analysis,
            Cryptonest helps you stay informed without unnecessary complexity.
          </p>

          <p className="mt-4 font-medium text-foreground">
            Built for learners, traders, and crypto enthusiasts alike.
          </p>
        </div>

        {/* Features */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-10 pb-4 border-b border-white/5 text-center">
            What You Can Do With Cryptonest
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Live Price Tracking"
              desc="Track real-time cryptocurrency prices with accurate market data and percentage changes updated continuously."
            />
            <FeatureCard
              title="Detailed Coin Pages"
              desc="Analyze individual coins with charts, market cap, volume, 24h highs/lows, and historical trends."
            />
            <FeatureCard
              title="Compare Cryptocurrencies"
              desc="Compare two cryptocurrencies side by side to evaluate performance, price movement, and market strength."
            />
            <FeatureCard
              title="Global Market Overview"
              desc="Get a snapshot of the global crypto market including total market cap, Bitcoin dominance, and movers."
            />
            <FeatureCard
              title="Multi-Currency Support"
              desc="View prices in USD, INR, or EUR seamlessly based on your preference."
            />
            <FeatureCard
              title="Light & Dark Theme"
              desc="Enjoy a clean, accessible interface with a theme that adapts to your viewing preference."
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 pb-4 border-b border-white/5 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <FAQItem
              question="Is Cryptonest free to use?"
              answer="Yes. Cryptonest is completely free and does not require any subscription, payment, or account creation."
            />
            <FAQItem
              question="Do I need to sign up to use Cryptonest?"
              answer="No sign-up is required. You can explore prices, track coins, and compare cryptocurrencies instantly."
            />
            <FAQItem
              question="Where does the data come from?"
              answer="Cryptonest uses reliable public cryptocurrency APIs such as CoinGecko to ensure accurate and up-to-date market data."
            />
            <FAQItem
              question="How often is the data updated?"
              answer="Prices and market data are refreshed frequently to reflect real-time changes in the crypto market."
            />
            <FAQItem
              question="Can I use Cryptonest on mobile?"
              answer="Yes. Cryptonest is fully responsive and optimized for mobile, tablet, and desktop devices."
            />
          </div>
        </div>

        {/* GitHub */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/Sid-Hurry/CryptoNest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition glass-panel hover:bg-white/10 text-foreground shadow-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .1.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.1-.4 3-.1 3-.1.6 1.5.2 2.6.1 2.9.8.8 1.2 1.8 1.2 3 0 4.3-2.6 5.3-5.1 5.6.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
            View GitHub Repository
          </a>
        </div>

      </div>
    </main>
  );
};

export default About;
