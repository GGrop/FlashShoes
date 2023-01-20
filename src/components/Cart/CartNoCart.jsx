import React from 'react';
import { NavLink } from 'react-router-dom';

function CartNoCart() {
  return (
    <div className="cartNoCartContainer">
      <h2>No hay productos en su carrito!</h2>
      <NavLink to="/categoria/running">
        <button className="myButtton Vist" type="button">
          <span className="vistSpan">Visitar Store</span>
        </button>
      </NavLink>
    </div>
  );
}

export default CartNoCart;
