import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.location.pathname === '/missions') {
      setActiveIndex(1);
    } else if (window.location.pathname === '/profile') {
      setActiveIndex(2);
    }
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <header>
      <nav>
        <ul>
          <NavLink to="/" className={`routing ${activeIndex === 0 ? 'activated' : ''}`} onClick={(e) => handleClick(0, e)}>
            <i className="fa fa-angle-left" />
          </NavLink>
        </ul>
      </nav>
    </header>

  );
};

export default Header;
