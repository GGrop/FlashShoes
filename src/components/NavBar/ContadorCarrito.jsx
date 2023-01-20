import React from 'react';
import { useCartContext } from '../../context/CartContext';

function ContadorCarrito() {
  const { CantidadTotalCarrito } = useCartContext();

  const Cant = CantidadTotalCarrito();

  return (
    <div>{Cant ? <i className="countCarrito">{Cant}</i> : <div> </div>}</div>
  );
}
export default ContadorCarrito;
