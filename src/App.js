import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './util/Content';

function App() {
  return (
    <Router>
      <div className="App">
        <Content />
      </div>
    </Router>
  );
}

export default App;
