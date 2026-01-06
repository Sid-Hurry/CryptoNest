import React, { useContext, useState } from "react";
import { coincontext } from "../context/coincontext";

const Compare = () => {
  const { allcoins, currency } = useContext(coincontext);

  const [coinAId, setCoinAId] = useState("");
  const [coinBId, setCoinBId] = useState("");

  const coinA = allcoins.find((c) => c.id === coinAId);
  const coinB = allcoins.find((c) => c.id === coinBId);

  const getRank = (id) =>
    allcoins.findIndex((c) => c.id === id) + 1;

  const Row = ({ label, a, b, highlight }) => (
    <div
      className="grid grid-cols-[2fr_1.5fr_1.5fr] px-6 py-4 items-center text-sm"
      style={{ borderBottom: "1px solid var(--border-color)" }}
    >
      <p style={{ color: "var(--muted-text)" }}>{label}</p>

      <p className={`text-center font-semibold ${highlight?.a || ""}`}>
        {a ?? "—"}
      </p>

      <p className={`text-center font-semibold ${highlight?.b || ""}`}>
        {b ?? "—"}
      </p>
    </div>
  );

  return (
    <main
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
      className="px-4"
    >
      <div className="max-w-6xl mx-auto pt-24 pb-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold">
            Compare Cryptocurrencies
          </h1>
          <p
            className="mt-4 text-lg max-w-xl mx-auto"
            style={{ color: "var(--muted-text)" }}
          >
            Compare two cryptocurrencies side by side and analyze
            price market cap volume and performance.
          </p>
        </div>

        {/* Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <select
            value={coinAId}
            onChange={(e) => setCoinAId(e.target.value)}
            className="px-4 py-3 rounded-lg outline-none"
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              border: "1px solid var(--border-color)",
            }}
          >
            <option value="">Select first coin</option>
            {allcoins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>

          <select
            value={coinBId}
            onChange={(e) => setCoinBId(e.target.value)}
            className="px-4 py-3 rounded-lg outline-none"
            style={{
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              border: "1px solid var(--border-color)",
            }}
          >
            <option value="">Select second coin</option>
            {allcoins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>
        </div>

        {/* Comparison Table */}
        {(coinA || coinB) && (
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid var(--border-color)" }}
          >
            {/* Header */}
            <div
              className="grid grid-cols-[2fr_1.5fr_1.5fr] px-6 py-5 text-sm font-semibold"
              style={{
                backgroundColor: "rgba(0,0,0,0.03)",
                borderBottom: "1px solid var(--border-color)",
              }}
            >
              <p></p>

              <div className="flex flex-col items-center">
                {coinA ? (
                  <>
                    <img
                      src={coinA.image}
                      alt={coinA.name}
                      className="w-8 h-8 mb-1"
                    />
                    <p>{coinA.name}</p>
                  </>
                ) : (
                  "—"
                )}
              </div>

              <div className="flex flex-col items-center">
                {coinB ? (
                  <>
                    <img
                      src={coinB.image}
                      alt={coinB.name}
                      className="w-8 h-8 mb-1"
                    />
                    <p>{coinB.name}</p>
                  </>
                ) : (
                  "—"
                )}
              </div>
            </div>

            {/* Rows */}
            <Row
              label="Rank"
              a={coinA ? `#${getRank(coinA.id)}` : null}
              b={coinB ? `#${getRank(coinB.id)}` : null}
            />

            <Row
              label="Price"
              a={
                coinA
                  ? `${currency.symbol}${coinA.current_price.toLocaleString()}`
                  : null
              }
              b={
                coinB
                  ? `${currency.symbol}${coinB.current_price.toLocaleString()}`
                  : null
              }
            />

            <Row
              label="24h Change"
              a={
                coinA
                  ? `${coinA.price_change_percentage_24h.toFixed(2)}%`
                  : null
              }
              b={
                coinB
                  ? `${coinB.price_change_percentage_24h.toFixed(2)}%`
                  : null
              }
              highlight={{
                a:
                  coinA?.price_change_percentage_24h >= 0
                    ? "text-green-600"
                    : "text-red-600",
                b:
                  coinB?.price_change_percentage_24h >= 0
                    ? "text-green-600"
                    : "text-red-600",
              }}
            />

            <Row
              label="Market Cap"
              a={
                coinA
                  ? `${currency.symbol}${coinA.market_cap.toLocaleString()}`
                  : null
              }
              b={
                coinB
                  ? `${currency.symbol}${coinB.market_cap.toLocaleString()}`
                  : null
              }
            />

            <Row
              label="Volume"
              a={
                coinA
                  ? `${currency.symbol}${coinA.total_volume.toLocaleString()}`
                  : null
              }
              b={
                coinB
                  ? `${currency.symbol}${coinB.total_volume.toLocaleString()}`
                  : null
              }
            />

            <Row
              label="24h High"
              a={
                coinA
                  ? `${currency.symbol}${coinA.high_24h.toLocaleString()}`
                  : null
              }
              b={
                coinB
                  ? `${currency.symbol}${coinB.high_24h.toLocaleString()}`
                  : null
              }
            />

            <Row
              label="24h Low"
              a={
                coinA
                  ? `${currency.symbol}${coinA.low_24h.toLocaleString()}`
                  : null
              }
              b={
                coinB
                  ? `${currency.symbol}${coinB.low_24h.toLocaleString()}`
                  : null
              }
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Compare;
