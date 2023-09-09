import React, { useState } from 'react';
import MenuItems from './MenuItems';
import './Header.css';
import { BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="header">
      <div className="header-inner">
        <div className="logo">
          <h2>
            <Link className="title" to="/">
              <span className="logo-y">Y</span> Hacker News
            </Link>
          </h2>
        </div>
        <div className="menu">
          <ul className="menu-horizontal">
            <MenuItems active="horizontal" />
          </ul>
          {!open ? (
            <BsList className="bslist-icon" onClick={handleToggle} />
          ) : (
            <div className="shade" onClick={handleToggle}></div>
          )}
          <ul
            className={`menu-vertical ${open ? 'open' : ''}`}
            onClick={handleToggle}>
            <MenuItems active="vertical" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
