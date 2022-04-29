import ItemDesc from "../ItemDesc/ItemDesc"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import '../Css.css'

const ItemDescList =(productos)=>{
    return(
            <>
            <Swiper
            key={productos.id}
            slidesPerView={4}
            spaceBetween={10}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
                {
                productos.myArray.map((prod)=>
                <SwiperSlide key={prod.id}>
                    <ItemDesc 
                    id={prod.id} 
                    name={prod.name} 
                    picture1={prod.picture1} 
                    stock={prod.stock} 
                    price={prod.price}
                    descuento={prod.descuento}
                    />
                </SwiperSlide>
                )
                }
            </Swiper>
        </>
    )
}
export default ItemDescList