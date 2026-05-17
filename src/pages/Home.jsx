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

  const topGainers = [...allcoins]
    .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
    .slice(0, 3);

  return (
    <main className="min-h-screen px-4 text-foreground relative z-10">
      <div className="max-w-7xl mx-auto pt-24 pb-16">

        {/* Heading */}
        <div className="mb-12 border-b border-white/10 pb-8 flex flex-col items-center text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 block">Dashboard</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted">
            Track Crypto Prices in Real Time
          </h1>
          <p
            className="mt-4 text-lg max-w-2xl text-muted leading-relaxed"
          >
            Monitor live cryptocurrency prices, market trends, and performance
            in one sleek, professional dashboard.
          </p>
        </div>

        {/* Top Movers Widget */}
        {topGainers.length > 0 && search.trim() === "" && (
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold mb-4 text-muted uppercase tracking-wider text-center">Top Gainers 24h</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {topGainers.map((coin) => (
                <Link
                  to={`/coin/${coin.id}`}
                  key={coin.id}
                  className="flex items-center gap-3 p-4 rounded-xl glass-panel hover:bg-white/5 hover:scale-[1.02] transition-all duration-300"
                >
                  <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{coin.name}</p>
                    <p className="text-xs uppercase text-muted truncate">{coin.symbol}</p>
                  </div>
                  <p className="text-green-600 font-semibold text-sm">
                    +{coin.price_change_percentage_24h.toFixed(2)}%
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

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
              className="flex-1 px-4 py-2 rounded-l-lg outline-none bg-background/50 text-foreground border border-border focus:border-muted transition-colors backdrop-blur-sm"
            />
            <button
              className="px-6 py-2 rounded-r-lg font-medium border border-border border-l-0 bg-background/50 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              Search
            </button>
          </div>

          {/* Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              className="absolute z-20 w-full mt-1 rounded-lg shadow-xl glass-panel overflow-hidden"
            >
              {suggestions.map((coin) => (
                <div
                  key={coin.id}
                  onClick={() => {
                    setSearch(coin.name);
                    setShowSuggestions(false);
                  }}
                  className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                  <div>
                    <p className="text-sm font-medium">{coin.name}</p>
                    <p
                      className="text-xs uppercase text-muted"
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
        <div className="w-full mt-16 glass-panel rounded-2xl p-2 md:p-4 mb-8">

          {/* Header */}
          <div
            className="
              grid grid-cols-4 md:grid-cols-5
              px-3 md:px-4 py-3
              text-sm font-semibold border-b border-border text-muted mb-2
            "
          >
            <p>#</p>
            <p>Coin</p>
            <p className="text-right">Price</p>
            <p className="text-right">24h</p>
            <p className="hidden md:block text-right">Market Cap</p>
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
                  className="
                    grid grid-cols-4 md:grid-cols-5
                    px-3 md:px-4 py-4
                    items-center text-sm transition-all duration-300
                    rounded-xl hover:bg-white/5 hover:scale-[1.01] hover:shadow-sm
                  "
                >
                  <p className="font-medium">{localRank}</p>

                  <div className="flex items-center gap-3">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="w-7 h-7"
                    />
                    <div>
                      <p className="font-semibold">{coin.name}</p>
                      <p
                        className="text-xs uppercase text-muted"
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

                  <p className="hidden md:block text-right font-medium">
                    {currency.symbol}
                    {coin.market_cap.toLocaleString()}
                  </p>
                </Link>
              );
            })
          ) : (
            <p
              className="text-center py-10 text-muted"
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
