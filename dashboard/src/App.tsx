import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Menu />
    </div>
  );
}

export default App;
