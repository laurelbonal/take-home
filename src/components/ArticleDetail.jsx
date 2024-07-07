import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchArticleDetails } from '../APIcalls'; // Correct path to APIcalls.js

const ArticleDetail = () => {
  const { url } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const getArticle = async () => {
      const articleData = await fetchArticleDetails(decodeURIComponent(url));
      setArticle(articleData);
    };

    getArticle();
  }, [url]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
      <p>{article.content}</p>
      <p><a href={article.url} target="_blank" rel="noopener noreferrer">Read more at {article.source.name}</a></p>
      <Link to="/">Back to Articles</Link>
    </div>
  );
};

export default ArticleDetail;