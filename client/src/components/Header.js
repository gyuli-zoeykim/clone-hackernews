import React, { useState, useEffect } from 'react';
import MenuItems from './MenuItems';
import './Header.css';
import { BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          {windowWidth > 744 ? (
            <ul className="menu-horizontal">
              <MenuItems active="horizontal" />
            </ul>
          ) : (
            <>
              {!open ? (
                <div className="menu-icon" onClick={handleToggle}>
                  <BsList className="bslist-icon" />
                </div>
              ) : (
                <div className="shade" onClick={handleToggle}></div>
              )}
              <ul
                className={`menu-vertical ${open ? 'open' : ''}`}
                onClick={handleToggle}>
                <MenuItems active="vertical" />
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
