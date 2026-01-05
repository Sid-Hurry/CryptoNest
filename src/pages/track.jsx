import React, { useContext, useState } from "react";
import { coincontext } from "../context/CoinContext";
import { Link } from "react-router-dom";

const Track = () => {
  const { allcoins, currency } = useContext(coincontext);
  const [search, setSearch] = useState("");

  // Filter coins based on search
  const filteredCoins = allcoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex flex-col items-center mt-24 px-4 text-center">

      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-gray-900">
        Track Cryptocurrencies
      </h1>

      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Browse and track all available cryptocurrencies with real-time prices
        and market data.
      </p>

      {/* Search */}
      <div className="mt-8 flex w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a coin (e.g. Bitcoin)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg
                     outline-none focus:outline-none focus:ring-0"
        />
        <button
          className="px-6 py-2 border border-l-0 border-gray-300 rounded-r-lg
                     font-medium hover:bg-gray-100"
        >
          Search
        </button>
      </div>

      {/* Table */}
      <div className="w-full max-w-6xl mt-16 overflow-x-auto text-left">

        {/* Header */}
        <div className="grid grid-cols-5 px-4 py-4
                        text-lg font-bold text-gray-900
                        border-b-2 border-gray-300">
          <p>#</p>
          <p>Coin</p>
          <p className="text-right">Price</p>
          <p className="text-right">24h Change</p>
          <p className="text-right">Market Cap</p>
        </div>

        {/* Rows */}
        {filteredCoins.length > 0 ? (
          filteredCoins.map((coin) => {
            const localRank =
              allcoins.findIndex((c) => c.id === coin.id) + 1;

            return (
              <Link
                to={`/coin/${coin.id}`}
                key={coin.id}
                className="grid grid-cols-5 px-4 py-4 items-center text-sm
                           border-b border-gray-200
                           hover:bg-gray-50 transition"
              >
                {/* Rank */}
                <p className="font-medium text-gray-800">
                  {localRank}
                </p>

                {/* Coin */}
                <div className="flex items-center gap-3">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-7 h-7"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {coin.name}
                    </p>
                    <p className="text-xs text-gray-600 uppercase">
                      {coin.symbol}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <p className="text-right font-semibold text-gray-900">
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

                {/* Market Cap */}
                <p className="text-right font-medium text-gray-800">
                  {currency.symbol}
                  {coin.market_cap.toLocaleString()}
                </p>
              </Link>
            );
          })
        ) : (
          <p className="text-center py-8 text-gray-500">
            No coins found
          </p>
        )}
      </div>
    </main>
  );
};

export default Track;
