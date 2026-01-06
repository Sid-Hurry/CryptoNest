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
      <div
        className="mt-32 text-center"
        style={{ color: "var(--muted-text)" }}
      >
        Loading coin data...
      </div>
    );
  }

  return (
    <main
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
      className="px-4"
    >
      <div className="max-w-5xl mx-auto pt-24 pb-16">

        {/* Header */}
        <div className="relative mb-14">

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute right-0 top-0
                       flex items-center gap-1
                       px-3 py-1.5 text-sm font-medium
                       rounded-md transition hover:opacity-80"
            style={{
              border: "1px solid #ef4444",
              color: "#ef4444",
            }}
          >
            ← Back
          </button>

          {/* Coin Info */}
          <div className="flex flex-col items-center text-center">
            <img
              src={coin.image}
              alt={coin.name}
              className="w-16 h-16 mb-4"
            />

            {/* Name + Rank */}
            <div className="relative inline-flex items-center justify-center">
              <h1 className="text-4xl font-bold">
                {coin.name}
              </h1>

              {localRank > 0 && (
                <span
                  className="absolute -right-14 px-3 py-1 text-sm font-semibold rounded-full"
                  style={{
                    border: "1px solid var(--border-color)",
                    color: "var(--muted-text)",
                  }}
                >
                  #{localRank}
                </span>
              )}
            </div>

            <p
              className="uppercase tracking-wider mt-1"
              style={{ color: "var(--muted-text)" }}
            >
              {coin.symbol}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-14">

          {[
            {
              label: "Current Price",
              value: `${currency.symbol}${coin.current_price.toLocaleString()}`,
            },
            {
              label: "24h Change",
              value: `${coin.price_change_percentage_24h.toFixed(2)}%`,
              color:
                coin.price_change_percentage_24h >= 0
                  ? "text-green-600"
                  : "text-red-600",
            },
            {
              label: "Market Cap",
              value: `${currency.symbol}${coin.market_cap.toLocaleString()}`,
            },
            {
              label: "24h High",
              value: `${currency.symbol}${coin.high_24h.toLocaleString()}`,
            },
            {
              label: "24h Low",
              value: `${currency.symbol}${coin.low_24h.toLocaleString()}`,
            },
            {
              label: "Volume",
              value: `${currency.symbol}${coin.total_volume.toLocaleString()}`,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg p-4"
              style={{
                border: "1px solid var(--border-color)",
                backgroundColor: "var(--bg-color)",
              }}
            >
              <p
                className="text-sm mb-1"
                style={{ color: "var(--muted-text)" }}
              >
                {item.label}
              </p>
              <p
                className={`text-lg font-semibold ${item.color || ""}`}
              >
                {item.value}
              </p>
            </div>
          ))}

        </div>

        {/* Chart */}
        <div
          className="rounded-lg p-4"
          style={{
            border: "1px solid var(--border-color)",
            backgroundColor: "var(--bg-color)",
          }}
        >
          <Chart
            chartType="LineChart"
            width="100%"
            height="350px"
            data={chartData}
            options={{
              legend: "none",
              curveType: "function",
              chartArea: { width: "85%", height: "70%" },
              backgroundColor: "transparent",
              hAxis: { textStyle: { color: "#9ca3af" } },
              vAxis: { textStyle: { color: "#9ca3af" } },
            }}
          />
        </div>

      </div>
    </main>
  );
};

export default Coin;
