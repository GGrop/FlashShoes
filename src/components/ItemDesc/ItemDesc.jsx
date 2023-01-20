import React from 'react';
import { Link } from 'react-router-dom';
import '../Css.css';

function ItemDesc(myArray) {
  const {
    id, name, picture1, price, descuento,
  } = myArray;
  return (
    <div className="divCardDesc">
      <div className="divImg">
        <img src={picture1} alt="" className="imgCard" />
      </div>
      <div className="divCardContent">
        <h3>{name}</h3>
        <div className="divTextDesc">
          <h4 className="textDescAux">
            {' '}
            $
            {price}
          </h4>
          <h5 className="textDesc">
            -
            {100 * descuento}
            %
          </h5>
        </div>
        <h4 className="">
          {' '}
          $
          {' '}
          {price - price * descuento}
          {' '}
        </h4>
      </div>
      <div className="DivButton">
        <Link to={`/detalle/${id}`}>
          <button className="myButtton" type="button">
            <span className="fa-solid fa-bag-shopping bagButton" />
            <span>Ver</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
export default ItemDesc;
