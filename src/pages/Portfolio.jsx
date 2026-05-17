import React, { useContext, useState } from "react";
import { coincontext } from "../context/coincontext";
import { PortfolioContext } from "../context/PortfolioContext";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { allcoins = [], currency = {} } = useContext(coincontext);
  const { portfolio, addCoinToPortfolio, removeCoinFromPortfolio } =
    useContext(PortfolioContext);

  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [amount, setAmount] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  const filteredCoins = allcoins.filter((coin) =>
    coin?.name?.toLowerCase().includes(search.toLowerCase())
  );
  const suggestions = search.trim() === "" ? [] : filteredCoins.slice(0, 5);

  const handleAdd = (e) => {
    e.preventDefault();
    if (selectedCoin && amount > 0 && buyPrice >= 0) {
      addCoinToPortfolio(selectedCoin.id, parseFloat(amount), parseFloat(buyPrice));
      setSearch("");
      setSelectedCoin(null);
      setAmount("");
      setBuyPrice("");
    }
  };

  // Calculate Metrics
  let totalCost = 0;
  let currentTotalValue = 0;

  const portfolioWithData = portfolio.map((item) => {
    const coinData = allcoins.find((c) => c.id === item.id);
    if (!coinData) return null;

    const currentPrice = coinData.current_price;
    const itemCost = item.amount * item.buyPrice;
    const itemValue = item.amount * currentPrice;
    const profitLoss = itemValue - itemCost;
    const profitLossPercentage = (profitLoss / itemCost) * 100 || 0;

    totalCost += itemCost;
    currentTotalValue += itemValue;

    return {
      ...item,
      coinData,
      currentPrice,
      itemCost,
      itemValue,
      profitLoss,
      profitLossPercentage,
    };
  }).filter(Boolean);

  const totalProfitLoss = currentTotalValue - totalCost;
  const totalProfitLossPercentage = (totalProfitLoss / totalCost) * 100 || 0;

  return (
    <main className="px-4 min-h-screen text-foreground relative z-10 pt-24 pb-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">My Portfolio</h1>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Track your crypto investments and monitor your profit and loss in real-time.
          </p>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-panel rounded-2xl p-6 text-center">
            <p className="text-muted text-sm mb-2 font-medium">Total Balance</p>
            <p className="text-3xl font-bold">
              {currency.symbol}{currentTotalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
          
          <div className="glass-panel rounded-2xl p-6 text-center">
            <p className="text-muted text-sm mb-2 font-medium">Total Cost</p>
            <p className="text-2xl font-semibold">
              {currency.symbol}{totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 text-center">
            <p className="text-muted text-sm mb-2 font-medium">Total Profit / Loss</p>
            <p className={`text-2xl font-semibold ${totalProfitLoss >= 0 ? "text-green-500" : "text-red-500"}`}>
              {totalProfitLoss >= 0 ? "+" : ""}{currency.symbol}{Math.abs(totalProfitLoss).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              <span className="text-sm ml-2">
                ({totalProfitLossPercentage >= 0 ? "+" : ""}{totalProfitLossPercentage.toFixed(2)}%)
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Add Coin Form */}
          <div className="lg:col-span-1">
            <div className="glass-panel rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6">Add Transaction</h2>
              <form onSubmit={handleAdd} className="space-y-4">
                
                {/* Search */}
                <div className="relative">
                  <label className="block text-sm text-muted mb-1">Select Coin</label>
                  <input
                    type="text"
                    placeholder="Search e.g. Bitcoin"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setShowSuggestions(true);
                      setSelectedCoin(null);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    className="w-full px-4 py-3 rounded-lg outline-none bg-background/50 text-foreground border border-border focus:border-muted transition-colors backdrop-blur-sm"
                  />
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute z-20 w-full mt-1 rounded-lg glass-panel overflow-hidden border border-border">
                      {suggestions.map((coin) => (
                        <div
                          key={coin.id}
                          onClick={() => {
                            setSelectedCoin(coin);
                            setSearch(coin.name);
                            setShowSuggestions(false);
                            // Auto fill current price
                            setBuyPrice(coin.current_price);
                          }}
                          className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors"
                        >
                          <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                          <div>
                            <p className="text-sm font-medium">{coin.name}</p>
                            <p className="text-xs uppercase text-muted">{coin.symbol}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-sm text-muted mb-1">Quantity</label>
                  <input
                    type="number"
                    step="any"
                    required
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg outline-none bg-background/50 text-foreground border border-border focus:border-muted transition-colors backdrop-blur-sm"
                  />
                </div>

                {/* Buy Price */}
                <div>
                  <label className="block text-sm text-muted mb-1">Buy Price ({currency.symbol})</label>
                  <input
                    type="number"
                    step="any"
                    required
                    placeholder="0.00"
                    value={buyPrice}
                    onChange={(e) => setBuyPrice(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg outline-none bg-background/50 text-foreground border border-border focus:border-muted transition-colors backdrop-blur-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!selectedCoin || !amount || !buyPrice}
                  className="w-full py-3 mt-4 rounded-lg font-bold transition-all duration-300 disabled:opacity-50 border border-white/20 bg-white/10 hover:bg-white/20"
                >
                  Add to Portfolio
                </button>
              </form>
            </div>
          </div>

          {/* Holdings List */}
          <div className="lg:col-span-2">
            <div className="glass-panel rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-xl font-bold">Your Assets</h2>
              </div>
              
              <div className="p-4">
                {portfolioWithData.length > 0 ? (
                  <div className="space-y-3">
                    {/* Header Row */}
                    <div className="grid grid-cols-4 md:grid-cols-5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                      <p>Asset</p>
                      <p className="text-right">Price</p>
                      <p className="text-right">Holdings</p>
                      <p className="hidden md:block text-right">Avg Buy</p>
                      <p className="text-right">P/L</p>
                    </div>

                    {/* Asset Rows */}
                    {portfolioWithData.map((item) => (
                      <div key={item.id} className="relative group">
                        <Link
                          to={`/coin/${item.id}`}
                          className="grid grid-cols-4 md:grid-cols-5 px-4 py-4 items-center text-sm transition-all duration-300 rounded-xl hover:bg-white/5 hover:scale-[1.01]"
                        >
                          {/* Asset */}
                          <div className="flex items-center gap-3">
                            <img src={item.coinData.image} alt={item.coinData.name} className="w-8 h-8" />
                            <div>
                              <p className="font-bold">{item.coinData.name}</p>
                              <p className="text-xs uppercase text-muted">{item.coinData.symbol}</p>
                            </div>
                          </div>

                          {/* Price */}
                          <p className="text-right font-medium">
                            {currency.symbol}{item.currentPrice.toLocaleString()}
                          </p>

                          {/* Holdings */}
                          <div className="text-right">
                            <p className="font-bold">{currency.symbol}{item.itemValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            <p className="text-xs text-muted">{item.amount.toLocaleString()} {item.coinData.symbol.toUpperCase()}</p>
                          </div>

                          {/* Avg Buy */}
                          <p className="hidden md:block text-right text-muted">
                            {currency.symbol}{item.buyPrice.toLocaleString()}
                          </p>

                          {/* P/L */}
                          <div className="text-right">
                            <p className={`font-bold ${item.profitLoss >= 0 ? "text-green-500" : "text-red-500"}`}>
                              {item.profitLoss >= 0 ? "+" : ""}{currency.symbol}{Math.abs(item.profitLoss).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </p>
                            <p className={`text-xs ${item.profitLossPercentage >= 0 ? "text-green-500/80" : "text-red-500/80"}`}>
                              {item.profitLossPercentage >= 0 ? "+" : ""}{item.profitLossPercentage.toFixed(2)}%
                            </p>
                          </div>
                        </Link>
                        
                        {/* Remove Button */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            removeCoinFromPortfolio(item.id);
                          }}
                          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 p-2 text-red-500 hover:text-red-400 transition-all duration-300"
                          title="Remove from portfolio"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center">
                    <p className="text-muted text-lg mb-2">Your portfolio is empty.</p>
                    <p className="text-sm text-muted/70">Search for a coin and add a transaction to start tracking.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Portfolio;
