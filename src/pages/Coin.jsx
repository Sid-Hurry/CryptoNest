import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Chart } from "react-google-charts";
import { coincontext } from "../context/coincontext";

const Coin = () => {
  const { coinID } = useParams();
  const navigate = useNavigate();
  const { currency, allcoins } = useContext(coincontext);

  const [coin, setCoin] = useState(null);
  const [chartData, setChartData] = useState([]);

  const localRank =
    allcoins.findIndex((c) => c.id === coinID) + 1;

  useEffect(() => {
    const fetchCoin = async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&ids=${coinID}`
      );
      const data = await res.json();
      setCoin(data[0]);
    };

    const fetchChart = async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=${currency.name}&days=7`
      );
      const data = await res.json();

      setChartData([
        ["Day", "Price"],
        ...data.prices.map((p, i) => [i + 1, p[1]]),
      ]);
    };

    fetchCoin();
    fetchChart();
  }, [coinID, currency]);

  if (!coin) {
    return (
      <div className="mt-32 text-center text-gray-500">
        Loading coin data...
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto mt-20 px-4">

      {/* Header wrapper */}
      <div className="relative mb-12">

        {/* Back Button (absolute, does NOT affect layout) */}
        <button
          onClick={() => navigate(-1)}
          className="absolute right-0 top-0
                     flex items-center gap-1
                     px-3 py-1.5
                     text-sm font-medium
                     border border-red-500
                     rounded-md
                     text-red-600
                     cursor-pointer
                     hover:bg-red-50 hover:text-red-700
                     transition"
        >
          ← Back
        </button>

        {/* Coin Header (perfectly centered) */}
        <div className="flex flex-col items-center text-center">
          <img
            src={coin.image}
            alt={coin.name}
            className="w-16 h-16 mb-4"
          />

          {/* Name + Rank */}
          <div className="relative inline-flex items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-900">
              {coin.name}
            </h1>

            {localRank > 0 && (
              <span
                className="absolute -right-12
                           px-3 py-1 text-sm font-semibold
                           border border-gray-300 rounded-full
                           text-gray-700"
              >
                #{localRank}
              </span>
            )}
          </div>

          <p className="uppercase text-gray-500 tracking-wider mt-1">
            {coin.symbol}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">

        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-500">Current Price</p>
          <p className="text-lg font-semibold text-gray-900">
            {currency.symbol}
            {coin.current_price.toLocaleString()}
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-500">24h Change</p>
          <p
            className={`text-lg font-semibold ${
              coin.price_change_percentage_24h >= 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-500">Market Cap</p>
          <p className="text-lg font-semibold text-gray-900">
            {currency.symbol}
            {coin.market_cap.toLocaleString()}
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-500">24h High</p>
          <p className="font-semibold text-gray-900">
            {currency.symbol}
            {coin.high_24h.toLocaleString()}
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-500">24h Low</p>
          <p className="font-semibold text-gray-900">
            {currency.symbol}
            {coin.low_24h.toLocaleString()}
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-500">Volume</p>
          <p className="font-semibold text-gray-900">
            {currency.symbol}
            {coin.total_volume.toLocaleString()}
          </p>
        </div>

      </div>

      {/* Chart */}
      <div className="border border-gray-200 rounded-lg p-4">
        <Chart
          chartType="LineChart"
          width="100%"
          height="350px"
          data={chartData}
          options={{
            legend: "none",
            curveType: "function",
            chartArea: { width: "85%", height: "70%" },
          }}
        />
      </div>

    </main>
  );
};

export default Coin;
