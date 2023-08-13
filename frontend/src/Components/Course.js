import React from 'react';
import Navbar from '../Navbar/navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Course = () => {
  return (
    <div>
      <header>
        <Navbar />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item " aria-current="page">
                  <Link to="/" className="text-dark text-primary custom-link text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  <Link
                    to="/Course"
                    className="custom-link text-primary fw-bold text-decoration-none">
                    Course
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

export default Course;