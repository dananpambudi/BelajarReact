import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '50%',
          margin: '50px auto',
          listStyleType: 'none'
        }}
      >
        <li>
          <Link to="/count">Project Count</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>#</li>
      </ul>
    </>
  );
}
