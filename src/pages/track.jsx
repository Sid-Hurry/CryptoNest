import React, { useContext, useState } from "react";
import { coincontext } from "../context/coincontext";
import { Link } from "react-router-dom";

const Track = () => {
  const { allcoins = [], currency = {} } = useContext(coincontext);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter coins safely
  const filteredCoins = allcoins.filter((coin) =>
    coin?.name?.toLowerCase().includes(search.toLowerCase())
  );

  // Suggestions (top 5)
  const suggestions =
    search.trim() === "" ? [] : filteredCoins.slice(0, 5);

  return (
    <main className="px-4 min-h-screen text-foreground relative z-10">
      <div className="max-w-7xl mx-auto pt-24 pb-16">

        {/* Heading */}
        <div className="mb-12 border-b border-white/10 pb-8 flex flex-col items-center text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-3 block">Cryptocurrency List</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted">
            Track All Cryptocurrencies
          </h1>
          <p className="mt-4 text-lg max-w-2xl text-muted leading-relaxed">
            Explore the complete cryptocurrency market with real time prices,
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
              className="flex-1 px-4 py-2 rounded-l-lg outline-none bg-background/50 text-foreground border border-border focus:border-muted transition-colors backdrop-blur-sm"
            />

            <button
              className="px-6 py-2 rounded-r-lg font-medium border border-border border-l-0 text-foreground bg-background/50 backdrop-blur-sm hover:bg-white/10 transition-colors"
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
                  <img
                    src={coin?.image}
                    alt={coin?.name}
                    className="w-5 h-5"
                  />
                  <div>
                    <p className="text-sm font-medium">{coin?.name}</p>
                    <p
                      className="text-xs uppercase text-muted"
                    >
                      {coin?.symbol}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Table */}
        <div className="w-full glass-panel rounded-2xl p-2 md:p-4 mb-8">

          {/* Header */}
          <div
            className="grid grid-cols-4 md:grid-cols-5 px-3 md:px-4 py-3 text-sm font-semibold border-b border-border text-muted mb-2"
          >
            <p>#</p>
            <p>Coin</p>
            <p className="text-right">Price</p>
            <p className="text-right">24h</p>
            <p className="hidden md:block text-right">Market Cap</p>
          </div>

          {/* Rows */}
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin, index) => {
              const price = coin?.current_price ?? 0;
              const priceChange = coin?.price_change_percentage_24h ?? 0;
              const marketCap = coin?.market_cap ?? 0;

              return (
                <Link
                  to={`/coin/${coin.id}`}
                  key={coin.id}
                  className="grid grid-cols-4 md:grid-cols-5 px-3 md:px-4 py-4 items-center text-sm transition-all duration-300 rounded-xl hover:bg-white/5 hover:scale-[1.01] hover:shadow-sm"
                >
                  {/* Rank */}
                  <p className="font-medium">{index + 1}</p>

                  {/* Coin */}
                  <div className="flex items-center gap-3">
                    <img
                      src={coin?.image}
                      alt={coin?.name}
                      className="w-7 h-7"
                    />
                    <div>
                      <p className="font-semibold">{coin?.name}</p>
                      <p
                        className="text-xs uppercase text-muted"
                      >
                        {coin?.symbol}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <p className="text-right font-semibold">
                    {currency?.symbol || "$"}
                    {price.toLocaleString()}
                  </p>

                  {/* 24h Change */}
                  <p
                    className={`text-right font-semibold ${
                      priceChange >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {priceChange.toFixed(2)}%
                  </p>

                  {/* Market Cap */}
                  <p className="hidden md:block text-right font-medium">
                    {currency?.symbol || "$"}
                    {marketCap.toLocaleString()}
                  </p>
                </Link>
              );
            })
          ) : (
            <p
              className="text-center py-12 text-muted"
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