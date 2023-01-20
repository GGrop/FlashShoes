import React from 'react';
import { Link } from 'react-router-dom';
import ItemDesc from '../ItemDesc/ItemDesc';
import 'react-toastify/dist/ReactToastify.css';

import '../Css.css';

function Item(myArray) {
  const {
    id, name, picture1, stock, price, descuento,
  } = myArray;
  return (
    <div>
      {descuento ? (
        <ItemDesc
          id={id}
          name={name}
          picture1={picture1}
          stock={stock}
          price={price}
          descuento={descuento}
        />
      ) : (
        <div>
          <div className="divCard">
            <div className="divImg">
              <img src={picture1} alt="" className="imgCard" />
            </div>
            <div className="divCardContent">
              <h3>{name}</h3>
              <h4>
                $
                {price}
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
        </div>
      )}
    </div>
  );
}

export default Item;
