import React from 'react';
import Router from 'next/router';

class Nav extends React.Component {
  render() {
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
                className="nav-span"
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
            align-items: center;
            flex-direction: row;
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
            -webkit-text-stroke: 0.4px #676464;
            font-family: EdwardianScriptITC;
            font-size: 33px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.21;
            letter-spacing: normal;
            text-align: left;
            padding: 0 30px 0 30px;
            color: #676464;
          }
        `}</style>
      </div>
    );
  }
}
export default Nav;
