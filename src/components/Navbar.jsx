import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { coincontext } from "../context/coincontext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { currency, setCurrency } = useContext(coincontext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const currencyHandler = (e) => {
    const value = e.target.value;
    if (value === "USD") setCurrency({ name: "USD", symbol: "$" });
    if (value === "EUR") setCurrency({ name: "EUR", symbol: "€" });
    if (value === "INR") setCurrency({ name: "INR", symbol: "₹" });
  };

  return (
    <nav
      className="w-full sticky top-0 z-50"
      style={{
        backgroundColor: "var(--bg-color)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Cryptonest
        </Link>

        {/* Navigation */}
        <div
          className="hidden md:flex gap-6 text-sm font-medium"
          style={{ color: "var(--muted-text)" }}
        >
          <Link to="/" className="hover:text-current">
            Home
          </Link>
          <Link to="/about" className="hover:text-current">
            About
          </Link>
          <Link to="/track" className="hover:text-current">
            Track
          </Link>
          <Link to="/compare" className="hover:text-current">
            Compare
          </Link>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">

          {/* Currency */}
          <select
            value={currency.name}
            onChange={currencyHandler}
            className="px-3 py-1.5 rounded-md text-sm outline-none"
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              border: "1px solid var(--border-color)",
            }}
          >
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
          </select>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 rounded-md text-sm"
            style={{
              backgroundColor: "transparent",
              color: "var(--text-color)",
              border: "1px solid var(--border-color)",
            }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
