import React from 'react';
import { Link } from 'react-router-dom';


const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-brand">
        Hello, Router!
      </div>
      <ul className="sidenav-list">
        <li>
          <Link
            className="sidenav-list__item"
            to="/"
          >
            主页
          </Link>
        </li>
        <li>
          <Link
            className="sidenav-list__item"
            to="/about"
          >
            走进涧行者
          </Link>
        </li>
        <div className="sidenav-list__header">
          涧行动态
        </div>
        <li>
          <Link
            className="sidenav-list__sub-item"
            to="/pages/1"
          >
            新闻动态
          </Link>
        </li>
        <li>
          <Link
            className="sidenav-list__sub-item"
            to="/pages/2"
          >
            媒体关注
          </Link>
        </li>
        <li>
          <Link
            className="sidenav-list__sub-item"
            to="/pages/3"
          >
            感悟分享
          </Link>
        </li>
        <li>
          <Link
            className="sidenav-list__item"
            to="/supportus"
          >
            支持我们
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
