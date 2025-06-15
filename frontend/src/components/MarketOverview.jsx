import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/MarketOverview.css";

const MarketOverview = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [indexes, setIndexes] = useState([]);
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/market/stocks/gainers")
      .then((res) => setGainers(res.data.quotes.slice(0, 5)))
      .catch((err) => console.error(err));

    axios.get("http://localhost:8080/api/market/stocks/losers")
      .then((res) => setLosers(res.data.quotes.slice(0, 5)))
      .catch((err) => console.error(err));

    axios.get("http://localhost:8080/api/market/indexes")
      .then((res) => setIndexes(res.data.quotes.slice(0, 5)))
      .catch((err) => console.error(err));

    axios.get("http://localhost:8080/api/market/crypto")
      .then((res) => setCrypto(res.data.slice(0, 5)))
      .catch((err) => console.error(err));
  }, []);

  const renderStock = (stock) => (
    <div key={stock.symbol} className="market-item">
      <span>{stock.shortName || stock.symbol}</span>
      <span>${stock.regularMarketPrice}</span>
      <span style={{ color: stock.regularMarketChangePercent > 0 ? "green" : "red" }}>
        {stock.regularMarketChangePercent.toFixed(2)}%
      </span>
    </div>
  );

  return (
    <div className="market-overview">
      <h2>📊 Market Overview</h2>
      <div className="market-sections">

        <div className="market-card">
          <h3>🔼 Top Gainers</h3>
          {gainers.map(renderStock)}
        </div>

        <div className="market-card">
          <h3>🔽 Top Losers</h3>
          {losers.map(renderStock)}
        </div>

        <div className="market-card">
          <h3>📈 Market Indexes</h3>
          {indexes.map((index) => (
            <div key={index.symbol} className="market-item">
              <span>{index.shortName}</span>
              <span>${index.regularMarketPrice}</span>
              <span style={{ color: index.regularMarketChangePercent > 0 ? "green" : "red" }}>
                {index.regularMarketChangePercent.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>

        <div className="market-card">
          <h3>🪙 Cryptos</h3>
          {crypto.map((coin) => (
            <div key={coin.id} className="market-item">
              <img src={coin.image} alt={coin.name} width={20} height={20} />
              <span>{coin.name}</span>
              <span>${coin.current_price}</span>
              <span style={{ color: coin.price_change_percentage_24h > 0 ? "green" : "red" }}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MarketOverview;
