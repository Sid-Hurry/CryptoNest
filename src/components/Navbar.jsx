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
      className="w-full sticky top-0 z-50 glass-panel !border-l-0 !border-r-0 !border-t-0 !rounded-none"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-foreground"
        >
          Cryptonest
        </Link>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex gap-6 text-sm font-medium text-muted"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/market">Market</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
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
            className="px-3 py-1.5 rounded-md text-sm outline-none bg-background text-foreground border border-border"
          >
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
          </select>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            title="Toggle Theme"
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl ml-1 text-foreground cursor-pointer"
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
  <div
    className="md:hidden bg-background border-t border-border"
  >
    <nav className="flex flex-col">
      {[
        { to: "/", label: "Home" },
        { to: "/market", label: "Market" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/track", label: "Track" },
        { to: "/compare", label: "Compare" },
        { to: "/about", label: "About" },
      ].map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={() => setOpen(false)}
          className="px-6 py-4 text-sm font-medium text-foreground hover:bg-muted/10 transition"
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
