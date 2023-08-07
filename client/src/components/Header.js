import React, { useState, useEffect } from 'react';
import MenuItems from './MenuItems';
import './Header.css';
import { BsList } from 'react-icons/bs';

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
          <h2>Hacker News</h2>
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
