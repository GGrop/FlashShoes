import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function MySwiper(props) {
  const { categoriaId } = props;

  return (
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
  );
}
export default MySwiper;
