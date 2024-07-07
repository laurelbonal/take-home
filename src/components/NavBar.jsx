import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ onFilterChange }) => {
  const [country, setCountry] = useState('us');

  const handleFilterChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    onFilterChange(selectedCountry);
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <select value={country} onChange={handleFilterChange} className="country-filter">
        <option value="us">United States</option>
        <option value="gb">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="de">Germany</option>
      </select>
    </nav>
  );
};

export default NavBar;
