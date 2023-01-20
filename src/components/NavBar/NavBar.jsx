import React from 'react';
import '../Css.css';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Home';
import Store from './Store';
import Carrito from './Carrito';
import Logo from './Logo';

function NavBar() {
  return (
    <header className="flexHeader">
      <div className="flexAuxiliarHeader">
        <div className="Logo">
          <NavLink className="items" to="/Home">
            <Logo />
          </NavLink>
        </div>
        <nav className="flexNav1">
          <NavLink to="/Home">
            <Home />
          </NavLink>
          <Store />
          <NavLink to="/Cart">
            <Carrito />
          </NavLink>
        </nav>
      </div>
      <ToastContainer />
    </header>
  );
}
export default NavBar;
