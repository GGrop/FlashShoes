import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import ItemList from '../components/ItemList/ItemList';
import '../components/Css.css';
import Loading from '../components/Loading/Loading';

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

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="Container">
          <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper2"
          >
            {categoriaId === 'running' ? (
              <div>
                <SwiperSlide>
                  <div className="Aside1" />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Aside2" />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Aside3" />
                </SwiperSlide>
              </div>
            ) : (
              <div>
                {categoriaId === 'street' ? (
                  <div>
                    <SwiperSlide>
                      <div className="Aside2" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="Aside1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="Aside3" />
                    </SwiperSlide>
                  </div>
                ) : (
                  <div>
                    <SwiperSlide>
                      <div className="Aside3" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="Aside1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="Aside2" />
                    </SwiperSlide>
                  </div>
                )}
              </div>
            )}
          </Swiper>
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
