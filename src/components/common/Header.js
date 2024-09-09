import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/hotels">Accommodations</Link></li>
          <li><Link to="/book/1">Book a Hotel</Link></li>
          <li><Link to="/admin">Admin Panel</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
