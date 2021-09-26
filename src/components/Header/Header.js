import React from 'react';
import './Header.css'

const Header = () => {
         return (
                  <div>
                           <div className>
                           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                           <div className="container-fluid">
                           <a className="navbar-brand ms-5" href="./web-guardian">Web Guardian</a>
                           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                           </button>
                           <div className="collapse navbar-collapse ms-3" id="navbarSupportedContent">
                           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="./Home">Home</a>
                           </li>
                           <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="./Home">Solution</a>
                           </li>
                           <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="./Home">Contact-Us</a>
                           </li>
                           <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="./Home">About</a>
                           </li>
                           </ul>
                           <form className="d-flex">
                           <input className="form-control d-flex flex-fill me-2" type="search" placeholder="Search" aria-label="Search"/>
                           <button className="btn btn-danger me-5" type="submit">Search</button>
                           </form>
                           </div>
                           </div>
                           </nav>
                           </div>
                           <div className="header-container text-center">
                           <h1>Make world lagest website : Web Guardian</h1>
                           <h6>We try to create the most popular and largest website, Read on to discover the most popular websites around the world</h6>
                           <h3>Total Budget: 100 Million</h3>
                           </div>
                  </div>
         );
};

export default Header;