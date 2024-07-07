const API_KEY = '7ce628d456044e1085d5f92a0b0589f4';
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