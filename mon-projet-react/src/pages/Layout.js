
import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./layout.css";

const Layout = () => {
  return (
    <>
    <div className="Header">
      <nav>
        <ul>
          <li>
            Exos React
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/formulaire">Formulaire</Link>
          </li>
          <li>
            <Link to="/appelapi">AppelApi</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;