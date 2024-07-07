import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './ArticleDetails.css';

const ArticleDetail = () => {
  const location = useLocation();
  const { article } = location.state || {};

  if (!article) {
    return <div>No article data available. Please go back to the <Link to="/">Articles page</Link> and select an article.</div>;
  }

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
      <p>{article.content}</p>
      <p>Source: {article.source.name}</p>
      <p>Author: {article.author}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more at {article.source.name}</a>
      <Link to="/">Back to Articles</Link>
    </div>
  );
};

export default ArticleDetail;
