import React from 'react';
import { useLocation } from 'react-router-dom';
import Routes from './Router';
import Header from './Header';

export default function Content() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === '/' && <Header />}

      <Routes />
    </div>
  );
}
