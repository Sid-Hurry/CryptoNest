import React, { useContext, useState } from "react";
import { coincontext } from "../context/coincontext";
import { Link } from "react-router-dom";

const Track = () => {
  const { allcoins, currency } = useContext(coincontext);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter coins
  const filteredCoins = allcoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  // Suggestions (top 5)
  const suggestions =
    search.trim() === "" ? [] : filteredCoins.slice(0, 5);

  return (
    <main
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
      className="px-4 min-h-screen"
    >
      <div className="max-w-7xl mx-auto pt-24 pb-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold">
            Track All Cryptocurrencies
          </h1>
          <p
            className="mt-4 text-lg max-w-xl mx-auto"
            style={{ color: "var(--muted-text)" }}
          >
            Explore the complete cryptocurrency market with real time prices
            market capitalization and daily performance.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-12">
          <div className="flex">
            <input
              type="text"
              placeholder="Search a coin eg Ethereum"
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
              className="px-6 py-2 rounded-r-lg font-medium transition hover:opacity-80"
              style={{
                border: "1px solid var(--border-color)",
                borderLeft: "none",
                color: "var(--text-color)",
                backgroundColor: "var(--bg-color)",
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
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-5 h-5"
                  />
                  <div>
                    <p className="text-sm font-medium">{coin.name}</p>
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
        <div className="w-full">

          {/* Header */}
          <div
            className="
              grid grid-cols-4 md:grid-cols-5
              px-3 md:px-4 py-3
              text-sm font-semibold
            "
            style={{
              borderBottom: "2px solid var(--border-color)",
              color: "var(--muted-text)",
            }}
          >
            <p>#</p>
            <p>Coin</p>
            <p className="text-right">Price</p>
            <p className="text-right">24h</p>
            <p className="hidden md:block text-right">Market Cap</p>
          </div>

          {/* Rows */}
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin, index) => (
              <Link
                to={`/coin/${coin.id}`}
                key={coin.id}
                className="
                  grid grid-cols-4 md:grid-cols-5
                  px-3 md:px-4 py-4
                  items-center text-sm transition
                "
                style={{
                  borderBottom: "1px solid var(--border-color)",
                }}
              >
                {/* Rank */}
                <p className="font-medium">{index + 1}</p>

                {/* Coin */}
                <div className="flex items-center gap-3">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-7 h-7"
                  />
                  <div>
                    <p className="font-semibold">{coin.name}</p>
                    <p
                      className="text-xs uppercase"
                      style={{ color: "var(--muted-text)" }}
                    >
                      {coin.symbol}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <p className="text-right font-semibold">
                  {currency.symbol}
                  {coin.current_price.toLocaleString()}
                </p>

                {/* 24h Change */}
                <p
                  className={`text-right font-semibold ${
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </p>

                {/* Market Cap (desktop only) */}
                <p className="hidden md:block text-right font-medium">
                  {currency.symbol}
                  {coin.market_cap.toLocaleString()}
                </p>
              </Link>
            ))
          ) : (
            <p
              className="text-center py-12"
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

export default Track;
