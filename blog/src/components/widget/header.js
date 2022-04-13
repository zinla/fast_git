// import { useState } from 'react';
import React from "react"
import { Link } from "gatsby";


let [setInputValue] = '';
let changeValue = (e) => {
  setInputValue = e.target.value;
  console.log(setInputValue);
}
export default function Header() {
  return (
    
      <div className="site-header">
        <div className="logo-and-tagline">
          <h1>
            <Link to="/">Alen's Blog</Link>
          </h1>
          <p>个人博客</p>
        </div>

        <nav id="main-nav" className="main-nav mobile-is-closed">
          <button aria-expanded="false" id="menu-button" className="menu-button">Menu</button>
          <ul>
            <li className="main-nav-episodes">
              <Link to="/rust">Rust 开发</Link>
            </li>
            <li className="main-nav-episodes">
              <Link to="/rust">Javascript 开发</Link>
            </li>
            <li className="main-nav-episodes">
              <Link to="/rust">Node.js 开发</Link>
            </li>
            <li className="main-nav-episodes">
              <Link to="/rust">VUe 开发</Link>
            </li>
            <li className="main-nav-episodes">
              <Link to="/rust">React 开发</Link>
            </li>

            <li className="main-nav-episodes">
              <Link to="/rust">Angular 开发</Link>
            </li>
            <li className="main-nav-episodes">
              <Link to="/rust">Python 开发</Link>
            </li>
             <li className="main-nav-episodes">
              <Link to="/rust">javascript数据结构</Link>
            </li>
             <li className="main-nav-episodes">
              <Link to="/rust">web后端开发</Link>
            </li>
             <li className="main-nav-episodes">
              <Link to="/rust">前端机器学习教程</Link>
            </li>
             <li className="main-nav-episodes">
              <Link to="/rust">小程序开发</Link>
            </li>
            
        

          </ul>
        </nav>
        <div role="search" method="get" id="searchform" className="searchform" action="./index.html">
          <form>
            <label htmlFor="s">Search for:</label>
          <input type="text" name="s" id="s" onChange={changeValue} />
          <p>{setInputValue}</p>
          </form>
      </div>
           
      </div>
    
    )
 
}
