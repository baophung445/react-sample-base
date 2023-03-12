import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.svg';

const HomePage = () => {
  console.log('Home Page');
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/counter">Counter</Link>
    </header>
  );
};

export default HomePage;
