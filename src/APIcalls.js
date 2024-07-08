const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const fetchTopHeadlines = async (country = 'us') => {
  try {
    const response = await fetch(`${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    return [];
  }
};