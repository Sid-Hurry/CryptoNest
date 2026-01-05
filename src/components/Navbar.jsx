import React, { useContext } from "react";
import { coincontext } from "../context/CoinContext";
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
    <nav className="w-full px-6 py-4 bg-white shadow-sm flex items-center justify-between">

      {/* App Name */}
      <Link to="/" className="text-xl font-bold text-gray-900">
        CryptoTrack
      </Link>

      {/* Nav Links */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-black">
            About
          </Link>
        </li>
        <li>
          <Link to="/track" className="hover:text-black">
            Track
          </Link>
        </li>
      </ul>

      {/* Currency Selector */}
      <select
        value={currency.name}
        onChange={currencyHandler}
        className="border border-gray-300 rounded-lg px-3 py-1 text-gray-700
                   outline-none focus:outline-none focus:ring-0"
      >
        <option value="USD">USD ($)</option>
        <option value="INR">INR (₹)</option>
        <option value="EUR">EUR (€)</option>
      </select>

    </nav>
  );
};

export default Navbar;
