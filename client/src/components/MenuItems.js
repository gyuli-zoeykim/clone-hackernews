import React from 'react';
import './MenuItems.css';
import { Link } from 'react-router-dom';

const MenuItems = ({ active }) => {
  return (
    <>
      <li className={active}>
        <Link className="title" to="/top">
          Top
        </Link>
      </li>
      <li className={active}>
        <Link className="title" to="/new">
          New
        </Link>
      </li>
      <li className={active}>
        <Link className="title" to="/best">
          Best
        </Link>
      </li>
      <li className={active}>
        <Link className="title" to="/ask">
          Ask
        </Link>
      </li>
      <li className={active}>
        <Link className="title" to="/show">
          Show
        </Link>
      </li>
      <li className={active}>
        <Link className="title" to="/jobs">
          Jobs
        </Link>
      </li>
      <li className={active}>
        <Link className="title" to="/comments">
          Comments
        </Link>
      </li>
    </>
  );
};

export default MenuItems;
