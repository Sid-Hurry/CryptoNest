import React, { useContext } from "react";
import { coincontext } from "../context/coincontext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currency, setCurrency } = useContext(coincontext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "USD":
        setCurrency({ name: "USD", symbol: "$" });
        break;
      case "EUR":
        setCurrency({ name: "EUR", symbol: "€" });
        break;
      case "INR":
        setCurrency({ name: "INR", symbol: "₹" });
        break;
      default:
        break;
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* App Name */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-gray-900"
        >
          Cryptonest
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-black transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-black transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/track"
              className="hover:text-black transition-colors"
            >
              Track
            </Link>
          </li>
        </ul>

        {/* Currency Selector */}
        <select
          value={currency.name}
          onChange={currencyHandler}
          className="border border-gray-300 bg-white
                     rounded-lg px-3 py-1.5
                     text-sm text-gray-700
                     outline-none focus:outline-none focus:ring-0
                     hover:border-gray-400 transition"
        >
          <option value="USD">USD ($)</option>
          <option value="INR">INR (₹)</option>
          <option value="EUR">EUR (€)</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
