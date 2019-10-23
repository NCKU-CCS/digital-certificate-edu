import React, { useState, useEffect } from 'react';
import Router from 'next/router';

const Nav: React.FC = () => {
  const [path, setPath] = useState('');
  useEffect(() => {
    setPath(window.location.pathname);
  });

  const navitems = [
    { str: '證書上傳', ref: '/upload' },
    { str: '使用說明', ref: '/descript' },
    { str: '支援學校', ref: '/support' },
  ];

  return (
    <div className="nav">
      <div className="nav-list">
        <img className="nav-img" src="/static/edu_icon.png" alt="edu_icon" />
        {navitems.map((item, index) => {
          return (
            <span
              className={`
                nav-span
                ${item.ref === path ? 'nav-span-selected' : 'nav-span-default'}
              `}
              key={index}
              onClick={() => Router.push(item.ref)}
            >
              {item.str}
            </span>
          );
        })}
      </div>
      <style jsx>{`
        .nav {
          width: 100vw;
          height: 99px;
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
          background-color: #ffffff;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: row;
          position: absolute;
          top: 0;
          left: 0;
        }
        .nav-list {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          height: inherit;
        }
        .nav-img {
          width: 78px;
          height: 78px;
          object-fit: contain;
          padding: 0 50px 0 50px;
        }
        .nav-span {
          font-family: EdwardianScriptITC;
          font-size: 33px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.21;
          letter-spacing: normal;
          text-align: center;
          height: inherit;
          padding: 0 30px 0 30px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }
        .nav-span-default {
          color: #676464;
          -webkit-text-stroke: 0.4px #676464;
        }
        .nav-span-selected {
          color: #4781e6;
          -webkit-text-stroke: 0.4px #4781e6;
          border-top: 6px solid transparent;
          border-bottom: 6px solid #4781e6;
        }
      `}</style>
    </div>
  );
};

export default Nav;
