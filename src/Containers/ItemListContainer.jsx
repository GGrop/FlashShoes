import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import ItemList from '../components/ItemList/ItemList';
import '../components/Css.css';
import Loading from '../components/Loading/Loading';
import MySwiper from '../components/MySwiper/MySwiper';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();
  const [loading, setLoading] = useState(true);

  const db = getFirestore();
  const queryColection = collection(db, 'productos');

  useEffect(() => {
    setTimeout(() => {
      if (categoriaId) {
        getDocs(queryColection)
          .then((respuesta) => {
            const productosCategoria = respuesta.docs.map((prod) => ({
              id: prod.id,
              ...prod.data(),
            }));
            setProductos(
              productosCategoria.filter(
                (prod) => prod.categoria === categoriaId,
              ),
            );
          })
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }
    }, 500);
    setLoading(1);
  }, [categoriaId]);
  console.log(categoriaId);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="Container">
          <MySwiper categoriaId={categoriaId} />
          <div className="CardList">
            <div className="CardListAuxiliar">
              <ItemList myArray={productos} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ItemListContainer;
