import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import '../Css.css';

function ItemCount(props) {
  const { init, stock, onAdd } = props;
  const [count, setCount] = useState(init);
  const { notify } = useCartContext();

  const suma = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      console.log(
        'Si deseas adquirir esa cantidad de productos contactate con nosotros para ser comprador mayorista!',
      );
    }
  };
  const resta = () => {
    if (count > init) {
      setCount(count - 1);
    }
  };
  const addCarrito = () => {
    onAdd(count);
    setCount(init);
    notify();
  };
  return (
    <div className="mySelectorCarritoContainer">
      <div className="mySelectorCarrito">
        <button className="myButtton BtnAddRes" onClick={resta} type="button">
          <span>-</span>
        </button>
        <div className="myLabel">
          <span className="SpanCount">{count}</span>
        </div>
        <button className="myButtton BtnAddRes" onClick={suma} type="button">
          <span>+</span>
        </button>
      </div>
      <button
        className="myButtton BtnDetail"
        onClick={addCarrito}
        type="button"
      >
        <span>Añadir al carrito</span>
      </button>
    </div>
  );
}

export default ItemCount;
