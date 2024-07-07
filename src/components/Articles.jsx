import React, { useEffect, useState } from 'react';
import { fetchTopHeadlines } from '../APIcalls';
import ArticleCard from './ArticleCard';
import './Articles.css';

const Articles = ({ country }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articlesData = await fetchTopHeadlines(country);
      setArticles(articlesData);
    };

    getArticles();
  }, [country]);

  return (
    <div className="articles">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default Articles;