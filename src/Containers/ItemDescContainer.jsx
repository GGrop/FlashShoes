
import { useState, useEffect } from "react"
import { getFirestore, collection, query, getDocs, where } from 'firebase/firestore'
import ItemDescList from "../components/ItemDescList/ItemDescList"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";

const ItemDescContainer=()=>{

    const[producto, setProductos]= useState([])
    const [loading, setLoading] = useState(true)

            useEffect(()=>{
                setTimeout(()=>{
                    const db = getFirestore()
                    const queryColection = collection(db, 'productos')
                    const queryFilter = query(queryColection, where('descuento','>', 0.1))
                    getDocs(queryFilter)
                    .then(resp=> setProductos(resp.docs.map(prod=>( {id:prod.id, ...prod.data()} ) )))
                    .catch(err => console.log(err))
                    .finally(()=> setLoading(false))
                },500)
            },[])

    return(
        <div>
            { loading ?
                <div className="flexito">
                    <div className="lds-roller boxing"><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div></div>
                </div>
            :
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper2">
                    <SwiperSlide><div className="Aside4"></div></SwiperSlide>
                </Swiper>
                <h2>Aprovecha los mejores precios!</h2>
                <ItemDescList myArray={producto}/>
            </div>
            }
        </div>
    )
}
export default ItemDescContainer