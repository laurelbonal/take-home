import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <p>{article.description}</p>
      <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
      <Link to={`/article/${encodeURIComponent(article.url)}`}>Read more</Link>
    </div>
  );
};

export default ArticleCard;