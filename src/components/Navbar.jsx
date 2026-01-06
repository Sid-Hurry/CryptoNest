import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { coincontext } from "../context/coincontext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { currency, setCurrency } = useContext(coincontext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const currencyHandler = (e) => {
    const value = e.target.value;
    if (value === "USD") setCurrency({ name: "USD", symbol: "$" });
    if (value === "EUR") setCurrency({ name: "EUR", symbol: "€" });
    if (value === "INR") setCurrency({ name: "INR", symbol: "₹" });
  };

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className="hover:opacity-80 transition"
    >
      {children}
    </Link>
  );

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

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex gap-6 text-sm font-medium"
          style={{ color: "var(--muted-text)" }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/market">Market</NavLink>
          <NavLink to="/track">Track</NavLink>
          <NavLink to="/compare">Compare</NavLink>
          <NavLink to="/about">About</NavLink>
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

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl ml-1"
            style={{ color: "var(--text-color)" }}
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
  <div
    className="md:hidden"
    style={{
      backgroundColor: "var(--bg-color)",
      borderTop: "1px solid var(--border-color)",
    }}
  >
    <nav className="flex flex-col">
      {[
        { to: "/", label: "Home" },
        { to: "/market", label: "Market" },
        { to: "/track", label: "Track" },
        { to: "/compare", label: "Compare" },
        { to: "/about", label: "About" },
      ].map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={() => setOpen(false)}
          className="px-6 py-4 text-sm font-medium
                     hover:bg-black/5 transition"
          style={{ color: "var(--text-color)" }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  </div>
)}

    </nav>
  );
};

export default Navbar;
