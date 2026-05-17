import React, { createContext, useState, useEffect } from "react";

export const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState(() => {
    const saved = localStorage.getItem("crypto_portfolio");
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("crypto_portfolio", JSON.stringify(portfolio));
  }, [portfolio]);

  const addCoinToPortfolio = (coinId, amount, buyPrice) => {
    setPortfolio((prev) => {
      const existingCoinIndex = prev.findIndex((item) => item.id === coinId);
      if (existingCoinIndex >= 0) {
        const updated = [...prev];
        const existing = updated[existingCoinIndex];
        const newTotalAmount = existing.amount + amount;
        const newAveragePrice =
          (existing.amount * existing.buyPrice + amount * buyPrice) /
          newTotalAmount;

        updated[existingCoinIndex] = {
          ...existing,
          amount: newTotalAmount,
          buyPrice: newAveragePrice,
        };
        return updated;
      } else {
        return [...prev, { id: coinId, amount, buyPrice }];
      }
    });
  };

  const removeCoinFromPortfolio = (coinId) => {
    setPortfolio((prev) => prev.filter((item) => item.id !== coinId));
  };

  return (
    <PortfolioContext.Provider
      value={{ portfolio, addCoinToPortfolio, removeCoinFromPortfolio }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
