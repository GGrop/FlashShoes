import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import ItemDesc from '../ItemDesc/ItemDesc';
import '../Css.css';

function ItemDescList(productos) {
  const {
    id, myArray,
  } = productos;
  return (
    <Swiper
      key={id}
      slidesPerView={4}
      spaceBetween={10}
      slidesPerGroup={4}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {myArray.map((prod) => (
        <SwiperSlide key={id}>
          <ItemDesc
            id={prod.id}
            name={prod.name}
            picture1={prod.picture1}
            stock={prod.stock}
            price={prod.price}
            descuento={prod.descuento}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ItemDescList;
