import React, { useContext, useState } from "react";
import { coincontext } from "../context/coincontext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allcoins, currency } = useContext(coincontext);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter coins
  const filteredCoins = allcoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  // Top 10 when no search
  const displayCoins =
    search.trim() === "" ? filteredCoins.slice(0, 10) : filteredCoins;

  // Suggestions
  const suggestions =
    search.trim() === "" ? [] : filteredCoins.slice(0, 5);

  return (
    <main
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
      className="min-h-screen px-4"
    >
      <div className="max-w-7xl mx-auto pt-24 pb-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Track Crypto Prices in Real Time
          </h1>
          <p
            className="mt-4 text-lg max-w-xl mx-auto"
            style={{ color: "var(--muted-text)" }}
          >
            Monitor live cryptocurrency prices market trends and performance
            in one simple dashboard
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <div className="flex">
            <input
              type="text"
              placeholder="Search for a coin eg Bitcoin"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="flex-1 px-4 py-2 rounded-l-lg outline-none"
              style={{
                backgroundColor: "var(--bg-color)",
                color: "var(--text-color)",
                border: "1px solid var(--border-color)",
              }}
            />
            <button
              className="px-6 py-2 rounded-r-lg font-medium"
              style={{
                border: "1px solid var(--border-color)",
                borderLeft: "none",
              }}
            >
              Search
            </button>
          </div>

          {/* Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              className="absolute z-10 w-full mt-1 rounded-lg shadow-md"
              style={{
                backgroundColor: "var(--bg-color)",
                border: "1px solid var(--border-color)",
              }}
            >
              {suggestions.map((coin) => (
                <div
                  key={coin.id}
                  onClick={() => {
                    setSearch(coin.name);
                    setShowSuggestions(false);
                  }}
                  className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:opacity-80"
                >
                  <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                  <div>
                    <p className="text-sm font-medium">
                      {coin.name}
                    </p>
                    <p
                      className="text-xs uppercase"
                      style={{ color: "var(--muted-text)" }}
                    >
                      {coin.symbol}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Table */}
        <div className="w-full mt-16 overflow-x-auto">

          {/* Header */}
          <div
            className="grid grid-cols-5 px-4 py-3 text-sm font-semibold"
            style={{
              borderBottom: "2px solid var(--border-color)",
              color: "var(--muted-text)",
            }}
          >
            <p>#</p>
            <p>Coin</p>
            <p className="text-right">Price</p>
            <p className="text-right">24h</p>
            <p className="text-right">Market Cap</p>
          </div>

          {/* Rows */}
          {displayCoins.length > 0 ? (
            displayCoins.map((coin) => {
              const localRank =
                allcoins.findIndex((c) => c.id === coin.id) + 1;

              return (
                <Link
                  to={`/coin/${coin.id}`}
                  key={coin.id}
                  className="grid grid-cols-5 px-4 py-4 items-center text-sm transition"
                  style={{
                    borderBottom: "1px solid var(--border-color)",
                  }}
                >
                  <p className="font-medium">{localRank}</p>

                  <div className="flex items-center gap-3">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="w-7 h-7"
                    />
                    <div>
                      <p className="font-semibold">
                        {coin.name}
                      </p>
                      <p
                        className="text-xs uppercase"
                        style={{ color: "var(--muted-text)" }}
                      >
                        {coin.symbol}
                      </p>
                    </div>
                  </div>

                  <p className="text-right font-semibold">
                    {currency.symbol}
                    {coin.current_price.toLocaleString()}
                  </p>

                  <p
                    className={`text-right font-semibold ${
                      coin.price_change_percentage_24h >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </p>

                  <p className="text-right font-medium">
                    {currency.symbol}
                    {coin.market_cap.toLocaleString()}
                  </p>
                </Link>
              );
            })
          ) : (
            <p
              className="text-center py-10"
              style={{ color: "var(--muted-text)" }}
            >
              No coins found
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
