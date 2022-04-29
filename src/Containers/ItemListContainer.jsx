import ItemList from "../components/ItemList/ItemList.jsx"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import '../components/Css.css'

const ItemListContainer =()=>{

    const[productos,setProductos]= useState([])
    const{categoriaId}= useParams()
    const [loading, setLoading] = useState(true)

    const db = getFirestore()
    const queryColection = collection(db, 'productos')


//DIVIDIR EN CATEGORIAS STREET, RUNNING Y ACCESORIOS

useEffect(()=>{
    setTimeout(() => {
        if(categoriaId){
            getDocs(queryColection)
            .then((respuesta)=>{
                const productosCategoria = respuesta.docs.map(prod=>( {id:prod.id, ...prod.data()} ) )
                setProductos(productosCategoria.filter(prod => prod.categoria === categoriaId))
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }, 500)
    setLoading(1)
    }, [categoriaId]);

    return(
        <div>
        { loading ?
        <div className="flexito">
            <div className="lds-roller boxing"><div></div><div></div><div>
            </div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        :
        <div className="Container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper2"
            >
            { (categoriaId == 'running') ?
            <div>
                <SwiperSlide><div className="Aside1"></div></SwiperSlide>
                <SwiperSlide><div className="Aside2"></div></SwiperSlide>
                <SwiperSlide><div className="Aside3"></div></SwiperSlide>
            </div>
            :    
            <div>
                { (categoriaId == 'street') ?
                    <div>
                        <SwiperSlide><div className="Aside2"></div></SwiperSlide>
                        <SwiperSlide><div className="Aside1"></div></SwiperSlide>
                        <SwiperSlide><div className="Aside3"></div></SwiperSlide>
                    </div>
                :
                    <div>
                        <SwiperSlide><div className="Aside3"></div></SwiperSlide>
                        <SwiperSlide><div className="Aside1"></div></SwiperSlide>
                        <SwiperSlide><div className="Aside2"></div></SwiperSlide>
                    </div>
                }
            </div>
            }   
            </Swiper>
            <div className="CardList">
                <div className="CardListAuxiliar">
                    <ItemList myArray={productos}/>
                </div>
            </div>
        </div>
        }
        </div>
    )
}
export default ItemListContainer