import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './components/Articles';
import ArticleDetail from './components/ArticleDetail';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:url" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;