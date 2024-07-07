import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      {article.urlToImage ? (
        <img src={article.urlToImage} alt={article.title} />
      ) : (
        <div className="no-image">No image at this time</div>
      )}
      <p>{article.description}</p>
      <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
      <Link to={`/article/${encodeURIComponent(article.url)}`} state={{ article }}>Read more</Link>
    </div>
  );
};

export default ArticleCard;