// src/components/FinanceNewsSection.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/FinanceNewSection.css";

const FinanceNewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/news");
        setArticles(res.data.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="finance-news-section">
      <h2 className="section-title">Latest Finance News</h2>
      <div className="news-cards">
        {articles.map((article, idx) => (
          <div key={idx} className="news-card">
            {article.urlToImage && (
              <img src={article.urlToImage} alt="news" className="news-image" />
            )}
            <h3>{article.title}</h3>
            <p>{article.description?.slice(0, 100)}...</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinanceNewsSection;
