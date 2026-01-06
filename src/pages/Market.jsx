import React, { useContext, useEffect, useState } from "react";
import { coincontext } from "../context/coincontext";

const StatCard = ({ label, value }) => (
  <div
    className="rounded-xl p-5"
    style={{
      backgroundColor: "var(--bg-color)",
      border: "1px solid var(--border-color)",
    }}
  >
    <p className="text-sm" style={{ color: "var(--muted-text)" }}>
      {label}
    </p>
    <p className="text-xl font-bold mt-2">{value}</p>
  </div>
);

const CoinRow = ({ coin, currency }) => (
  <div
    className="flex items-center justify-between px-4 py-3 text-sm"
    style={{ borderBottom: "1px solid var(--border-color)" }}
  >
    <div className="flex items-center gap-3">
      <img src={coin.image} alt={coin.name} className="w-6 h-6" />
      <div>
        <p className="font-semibold">{coin.name}</p>
        <p className="text-xs uppercase" style={{ color: "var(--muted-text)" }}>
          {coin.symbol}
        </p>
      </div>
    </div>

    <p
      className={`font-semibold ${
        coin.price_change_percentage_24h >= 0
          ? "text-green-600"
          : "text-red-600"
      }`}
    >
      {coin.price_change_percentage_24h.toFixed(2)}%
    </p>
  </div>
);

const Market = () => {
  const { allcoins, currency } = useContext(coincontext);
  const [marketData, setMarketData] = useState(null);

  useEffect(() => {
    const fetchGlobalData = async () => {
      const res = await fetch("https://api.coingecko.com/api/v3/global");
      const data = await res.json();
      setMarketData(data.data);
    };

    fetchGlobalData();
  }, []);

  const topGainers = [...allcoins]
    .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
    .slice(0, 5);

  const topLosers = [...allcoins]
    .sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
    .slice(0, 5);

  return (
    <main
      className="px-4 min-h-screen"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="max-w-6xl mx-auto py-24">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold">Market Overview</h1>
          <p
            className="mt-4 text-lg max-w-xl mx-auto"
            style={{ color: "var(--muted-text)" }}
          >
            A snapshot of the global cryptocurrency market and daily movers.
          </p>
        </div>

        {/* Stats */}
        {marketData && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <StatCard
              label="Total Market Cap"
              value={`${currency.symbol}${marketData.total_market_cap[currency.name.toLowerCase()].toLocaleString()}`}
            />
            <StatCard
              label="24h Market Change"
              value={`${marketData.market_cap_change_percentage_24h_usd.toFixed(
                2
              )}%`}
            />
            <StatCard
              label="Bitcoin Dominance"
              value={`${marketData.market_cap_percentage.btc.toFixed(2)}%`}
            />
            <StatCard
              label="Active Cryptocurrencies"
              value={marketData.active_cryptocurrencies.toLocaleString()}
            />
          </div>
        )}

        {/* Movers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Gainers */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid var(--border-color)" }}
          >
            <div className="px-4 py-3 font-semibold">
              Top Gainers (24h)
            </div>
            {topGainers.map((coin) => (
              <CoinRow key={coin.id} coin={coin} currency={currency} />
            ))}
          </div>

          {/* Losers */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid var(--border-color)" }}
          >
            <div className="px-4 py-3 font-semibold">
              Top Losers (24h)
            </div>
            {topLosers.map((coin) => (
              <CoinRow key={coin.id} coin={coin} currency={currency} />
            ))}
          </div>

        </div>
      </div>
    </main>
  );
};

export default Market;
