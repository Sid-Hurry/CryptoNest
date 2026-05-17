import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { coincontext } from "../context/coincontext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { currency, setCurrency } = useContext(coincontext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const currencyHandler = (e) => {
    const value = e.target.value;
    if (value === "USD") setCurrency({ name: "USD", symbol: "$" });
    if (value === "EUR") setCurrency({ name: "EUR", symbol: "€" });
    if (value === "INR") setCurrency({ name: "INR", symbol: "₹" });
  };

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={() => setOpen(false)}
        className={`px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
          isActive
            ? "bg-foreground/10 text-foreground font-semibold shadow-sm"
            : "text-muted hover:bg-foreground/5 hover:text-foreground"
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-sm shadow-black/5 dark:shadow-black/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 hover:opacity-90 transition-opacity"
        >
          Cryptonest
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 text-sm text-muted">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/market">Market</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/track">Track</NavLink>
          <NavLink to="/compare">Compare</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          
          {/* Currency */}
          <div className="relative group hidden sm:block">
            <select
              value={currency.name}
              onChange={currencyHandler}
              className="appearance-none pl-3 pr-8 py-2 rounded-lg text-sm font-medium outline-none bg-foreground/5 text-foreground border border-transparent hover:border-border/50 transition-all cursor-pointer"
            >
              <option value="USD" className="bg-background">USD ($)</option>
              <option value="INR" className="bg-background">INR (₹)</option>
              <option value="EUR" className="bg-background">EUR (€)</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted group-hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-foreground hover:bg-foreground/10 transition-colors"
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
            className="md:hidden p-2 text-foreground cursor-pointer hover:bg-foreground/5 rounded-xl transition-colors"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-lg">
          <nav className="flex flex-col p-4 gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/market", label: "Market" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/track", label: "Track" },
              { to: "/compare", label: "Compare" },
              { to: "/about", label: "About" },
            ].map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? "bg-foreground/10 text-foreground font-semibold"
                      : "text-muted hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
             <div className="px-4 py-2 mt-2 border-t border-border/50 sm:hidden">
               <select
                value={currency.name}
                onChange={currencyHandler}
                className="w-full px-3 py-2 rounded-lg text-sm font-medium outline-none bg-foreground/5 text-foreground border border-transparent"
              >
                <option value="USD" className="bg-background">USD ($)</option>
                <option value="INR" className="bg-background">INR (₹)</option>
                <option value="EUR" className="bg-background">EUR (€)</option>
              </select>
             </div>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
