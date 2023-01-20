import React from 'react';
import CartWidget from './CartWidget';
import ContadorCarrito from './ContadorCarrito';

function Carrito() {
  return (
    <div className="NavB">
      <CartWidget />
      <ContadorCarrito />
    </div>
  );
}

export default Carrito;
