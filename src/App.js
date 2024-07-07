import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './components/Articles';
import ArticleDetail from './components/ArticleDetails';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [country, setCountry] = useState('us');

  const handleFilterChange = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  return (
    <Router>
      <NavBar onFilterChange={handleFilterChange} />
      <Routes>
        <Route path="/" element={<Articles country={country} />} />
        <Route path="/article/:url" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;