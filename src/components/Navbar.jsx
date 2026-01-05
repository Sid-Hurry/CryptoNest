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
      <Link to="/" className="text-xl font-bold text-gray-900">
        CryptoTrack
      </Link>
{/* Navigation */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/track">Track</Link></li>
      </ul>

      <select
        value={currency.name}
        onChange={currencyHandler}
        className="border border-gray-300 rounded-lg px-3 py-1
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
