import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-xl bg-primary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
            
              <span className="navbar-logo-name ms-2 text-red"> Sky is Not Limit </span>
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-red">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/course" className="nav-link text-red">Course</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-red">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;