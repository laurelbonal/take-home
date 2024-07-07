import React, { useEffect, useState } from 'react';
import { fetchTopHeadlines } from '../APIcalls';
import ArticleCard from './ArticleCard';
import './Articles.css'

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