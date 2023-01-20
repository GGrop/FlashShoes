import { React, useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../context/CartContext';
import CartItemCount from '../CartItemCount/CartItemCount';
import CartNoCart from './CartNoCart';
import '../Css.css';

function Cart() {
  const {
    listaCarrito, BorrarCarrito, BorrarProd, PrecioTotal,
  } = useCartContext();
  const Precio = PrecioTotal();
  const [id, setId] = useState('');

  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const makeOrder = async (e) => {
    e.preventDefault();
    const order = {};

    order.buyer = dataForm;
    order.total = PrecioTotal();

    order.items = listaCarrito.map((prod) => {
      const { carid } = prod;
      const { name } = prod;
      const price = prod.price * prod.units;
      return { carid, name, price };
    });

    const db = getFirestore();
    const queryCollectionSet = collection(db, 'orders');
    addDoc(queryCollectionSet, order)
      .then((resp) => setId(resp.id))
      .catch((err) => console.error(err))
      .finally(() => console.log(console.log(order)));
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {Precio ? (
        <div className="divCartContainer">
          <h1>Este es su carrito:</h1>
          <div className="divCardCartContainer">
            {listaCarrito.map((prod) => (
              <div key={prod.id} className="divCartCard">
                <img src={prod.picture1} alt="" className="imgCart" />
                <h3 className="textBox">{`${prod.name}`}</h3>
                <p className="textBox">
                  PRECIO: $
                  {prod.price}
                </p>
                <p className="myLabel">{prod.units}</p>
                <CartItemCount id={prod.id} />
                <button
                  className="closeButton"
                  onClick={() => BorrarProd(prod.id)}
                  type="button"
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <div className="FlexPrecio">
            <button className="myButtton vaciarCart" onClick={BorrarCarrito} type="button">
              <span className="vaciarCart">Vaciar carrito</span>
            </button>
            <h1>
              Total: $
              {Precio}
            </h1>
          </div>
          <div className="FormContent">
            <form className="FormCart" onSubmit={makeOrder}>
              <input
                className="inputCart"
                type="text"
                name="name"
                placeholder="Usuario"
                value={dataForm.name}
                onChange={handleChange}
                required
              />
              <input
                className="inputCart"
                type="text"
                name="phone"
                placeholder="Telefono"
                value={dataForm.phone}
                onChange={handleChange}
                required
              />
              <input
                className="inputCart"
                type="email"
                name="email"
                placeholder="email"
                value={dataForm.email}
                onChange={handleChange}
                required
              />
              <button className="myButtton FCompraBtn" type="button">
                <span className="FCompra">Terminar Compra</span>
              </button>
            </form>
            {id.length ? (
              <div className="Compra">
                <h1>Gracias por comprar!</h1>
                <h3 className="idCompra">
                  {id.length !== '' && 'El id de la compra es:'}
                </h3>
                <h3 className="idCompra">{id}</h3>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      ) : (
        <CartNoCart />
      )}
    </div>
  );
}
export default Cart;
