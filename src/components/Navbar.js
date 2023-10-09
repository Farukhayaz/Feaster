import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as NavLink} from "react-router-dom";
import "../App.css"

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="contai">
        <div className="logo">
<img src='/images/logo.png'/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
<h1>icom</h1>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Events</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Drops</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Subs</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Exhibit</NavLink>
            </li>
            <li>
            <button className='bt mt-2 font-bold ml-5'>TICKETS</button>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
