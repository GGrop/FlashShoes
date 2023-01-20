import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCartContext } from '../../context/CartContext';
import ItemDescList from '../ItemDescList/ItemDescList';
import ItemCount from '../ItemCount/ItemCount';
import '../Css.css';
import Loading from '../Loading/Loading';

function ItemDetail(MyDetailArray) {
  const {
    id, name, picture1, picture2, picture3, stock, price, descuento, detail,
  } = MyDetailArray;

  const [producto, setProductos] = useState([]);
  const [count, setState] = useState('');
  const { detalleId } = useParams();
  const [loading, setLoading] = useState(1);
  const { AgregarAlCarrito } = useCartContext();
  const onAdd = (value) => {
    setState(value);
    AgregarAlCarrito({ ...MyDetailArray, units: value });
  };
  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const queryColection = collection(db, 'productos');
      const queryFilter = query(queryColection, where('descuento', '>', 0.1));
      getDocs(queryFilter)
        .then((resp) => setProductos(
          resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })),
        ))
        .catch((err) => console.log(err))
        .finally(() => setLoading(0));
    }, 450);
    setLoading(1);
  }, [detalleId]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div key={id} className="divCardDetail">
          <div className="divCardDetailImg">
            <Swiper
              spaceBetween={30}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper3"
            >
              {picture3 ? (
                <div>
                  <SwiperSlide>
                    <img
                      src={picture1}
                      alt="ImgProd"
                      className="imgCardDetail"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={picture2}
                      alt="ImgProd"
                      className="imgCardDetail"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={picture3}
                      alt="ImgProd"
                      className="imgCardDetail"
                    />
                  </SwiperSlide>
                </div>
              ) : (
                <div>
                  {picture2 ? (
                    <div>
                      <SwiperSlide>
                        <img
                          src={picture1}
                          alt="ImgProd"
                          className="imgCardDetail"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={picture2}
                          alt="ImgProd"
                          className="imgCardDetail"
                        />
                      </SwiperSlide>
                    </div>
                  ) : (
                    <div>
                      <SwiperSlide>
                        <img
                          src={picture1}
                          alt="ImgProd"
                          className="imgCardDetail"
                        />
                      </SwiperSlide>
                    </div>
                  )}
                </div>
              )}
            </Swiper>
          </div>
          <div className="divCardContentDetail">
            {descuento ? (
              <div className="divCardContentDetail">
                <h3 className="NameDetailFont">{name}</h3>
                <div className="divTextDescDetail">
                  <h4 className="textDescAuxDetail">
                    {' '}
                    $
                    {price}
                  </h4>
                  <h5 className="textDescDetail">
                    -
                    {100 * descuento}
                    %
                  </h5>
                </div>
                <h4 className="PriceFont">
                  {' '}
                  $
                  {price - price * descuento}
                  {' '}
                </h4>
                <p>{detail}</p>
                <h5>
                  Stock Disponible:
                  {stock}
                </h5>
                <div className="card-footer">
                  {count ? (
                    <Link to="/Cart">
                      <button className="myButtton" type="button">
                        <span>Ir al Carrito</span>
                      </button>
                    </Link>
                  ) : (
                    <div>
                      <ItemCount
                        init={1}
                        stock={stock}
                        onAdd={onAdd}
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="divCardContentDetail">
                <h3 className="NameDetailFont">{name}</h3>
                <h4 className="PriceFont">
                  $
                  {price}
                </h4>
                <p>{detail}</p>
                <h5>
                  Stock Disponible:
                  {stock}
                </h5>
                <div className="card-footer">
                  {count ? (
                    <Link to="/Cart">
                      <button className="myButtton" type="button">
                        <span>Ir al Carrito</span>
                      </button>
                    </Link>
                  ) : (
                    <ItemCount
                      init={1}
                      stock={stock}
                      onAdd={onAdd}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="CardRecomendacion">
        <h1 className="CardRecomH1">
          Quienes vieron este producto también compraron:
        </h1>
        <div className="CardListAuxiliar">
          <ItemDescList myArray={producto} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
