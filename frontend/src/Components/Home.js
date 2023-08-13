import React from 'react';
import Navbar from '../Navbar/navbar';

import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page">
                  <Link
                    to="/"
                    className="custom-link text-dark fw-bold text-decoration-none">
                    Home
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      </header>
    
      <Footer />
    </div>
  );
};

export default Home;