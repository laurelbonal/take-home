import React, { useEffect, useState } from 'react';
import { fetchTopHeadlines } from '../APIcalls'; // Correct path to APIcalls.js
import ArticleCard from './ArticleCard';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articlesData = await fetchTopHeadlines();
      setArticles(articlesData);
    };

    getArticles();
  }, []);

  return (
    <div className="articles">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default Articles;