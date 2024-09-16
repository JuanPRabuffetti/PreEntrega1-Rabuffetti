import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MyEcommerce</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categoria/remeras">Remeras</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categoria/pantalones">Pantalones</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categoria/zapas">Zapas</Link>                     
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
