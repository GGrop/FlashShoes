import React from 'react';
import './components/Css.css';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import ItemDescContainer from './Containers/ItemDescContainer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="appMain">
          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Home" element={<ItemDescContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/*" element={<Navigate to="/Home" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
