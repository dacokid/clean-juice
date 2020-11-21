import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const Header: React.FC = () => {
  return (
    <nav className="nav">
      <div className="logo">
        Clean J<span>u</span>ice
      </div>

      <div className="menu-links">
        <ul>
          <li>Locations</li>
          <li>Our menu</li>
          <li>Our story</li>
          <li>Meet our teem</li>
          <li>Own a clean juice</li>
          <li>Contact us</li>
        </ul>
      </div>

      <div className="search">
        <FontAwesomeIcon icon={faSearch} size="sm" />
      </div>

      <div className="account">My account</div>

      <div className="cart">
        <FontAwesomeIcon icon={faShoppingCart} size="sm" />
      </div>
    </nav>
  );
};

export default Header;
