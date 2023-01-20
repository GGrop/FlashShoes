import React from 'react';
import { useCartContext } from '../../context/CartContext';

function CartItemCount(value) {
  const { RestaUnit, SumaUnits } = useCartContext();

  const Resta = () => {
    RestaUnit(value);
  };
  const Suma = () => {
    SumaUnits(value);
  };
  return (
    <div className="">
      <button className="myButtton BtnAddRes2" onClick={Resta} type="button">
        <span>-</span>
      </button>
      <button className="myButtton BtnAddRes2" onClick={Suma} type="button">
        <span>+</span>
      </button>
    </div>
  );
}

export default CartItemCount;
