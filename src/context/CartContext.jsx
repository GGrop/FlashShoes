import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [listaCarrito, setlistaCarrito] = useState([]);

  const AgregarAlCarrito = (prod) => {
    const productoEncontrado = listaCarrito.find(
      (producto) => producto.id === prod.id,
    );
    if (productoEncontrado) {
      const nuevaListaCarrito = listaCarrito.map((productoCarrito) => {
        if (productoCarrito.id === productoEncontrado.id) {
          productoCarrito.units += prod.units;
        }
        return productoCarrito;
      });
      setlistaCarrito(nuevaListaCarrito);
    } else {
      if (prod.descuento > 0) {
        prod.price -= prod.price * prod.descuento;
      }
      setlistaCarrito([...listaCarrito, prod]);
    }
  };

  const BorrarCarrito = () => {
    setlistaCarrito([]);
  };

  const PrecioTotal = () => listaCarrito.reduce(
    (acum, prod) => acum + prod.units * prod.price,
    0,
  );

  const BorrarProd = (id) => {
    setlistaCarrito(listaCarrito.filter((prod) => prod.id !== id));
  };

  const CantidadTotalCarrito = () => listaCarrito.reduce((acum, prod) => (acum += prod.units), 0);
  /// //////////////////////////////////////////////////////////////////////
  const RestaUnit = (id) => {
    const Target = listaCarrito.find((producto) => producto.id === id.id);
    if (Target.units > 1) {
      const nuevaListaCarrito = listaCarrito.map((productoCarrito) => {
        if (productoCarrito.id === Target.id) {
          productoCarrito.units -= 1;
        }
        return productoCarrito;
      });
      setlistaCarrito(nuevaListaCarrito);
    }
  };

  const SumaUnits = (id) => {
    const Target = listaCarrito.find((producto) => producto.id === id.id);
    if (Target.units < Target.stock) {
      console.log(Target.units);
      const nuevaListaCarrito = listaCarrito.map((productoCarrito) => {
        if (productoCarrito.id === Target.id) {
          productoCarrito.units += 1;
        }
        return productoCarrito;
      });
      setlistaCarrito(nuevaListaCarrito);
    } else {
      console.log(
        'Si deseas adquirir esa cantidad de productos contactate con nosotros para ser comprador mayorista!',
      );
    }
  };

  const notify = () => {
    toast.success('Producto añadido al carrito!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <CartContext.Provider
      value={{
        listaCarrito,
        AgregarAlCarrito,
        BorrarCarrito,
        BorrarProd,
        PrecioTotal,
        CantidadTotalCarrito,
        RestaUnit,
        SumaUnits,
        notify,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
