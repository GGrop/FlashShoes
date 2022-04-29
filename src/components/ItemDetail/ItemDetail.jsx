import ItemDescList from '../ItemDescList/ItemDescList'
import ItemCount from '../ItemCount/ItemCount'
import React, { useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import '../Css.css'
import { ToastContainer } from 'react-toastify'

const ItemDetail =(MyDetailArray)=>{
    const[producto, setProductos]= useState([])
    const[count,setState]= useState('');
    const{detalleId}= useParams()
    const [loading, setLoading] = useState(1)
    const{AgregarAlCarrito} = useCartContext() //porq llama a cart context si no tiene a agregar carrito???
    const onAdd =(value)=>{
        setState(value)
        AgregarAlCarrito({... MyDetailArray, units: value})
    }
    useEffect(()=>{
        setTimeout(()=>{
            const db = getFirestore()
            const queryColection = collection(db, 'productos')
            const queryFilter = query(queryColection, where('descuento','>', 0.1))
            getDocs(queryFilter)
            .then(resp=> setProductos(resp.docs.map(prod=>( {id:prod.id, ...prod.data()} ) )))
            .catch(err => console.log(err))
            .finally(()=> setLoading(0))
        }, 450)
        setLoading(1)
    },[detalleId])

        
    return(
        <div>
            { loading ?
                <div className="flexito">
                    <div className="lds-roller boxing"><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div></div>
                </div>
            :
            <div key={MyDetailArray.id} className='divCardDetail'>
                <div className='divCardDetailImg'>
                    <Swiper spaceBetween={30} pagination={{ clickable: true}} modules={[Pagination]} className="mySwiper3">
                    { MyDetailArray.picture3 ?
                        <div>
                            <SwiperSlide><img src={MyDetailArray.picture1} alt='ImgProd' className='imgCardDetail' /></SwiperSlide>
                            <SwiperSlide><img src={MyDetailArray.picture2} alt='ImgProd' className='imgCardDetail' /></SwiperSlide>
                            <SwiperSlide><img src={MyDetailArray.picture3} alt='ImgProd' className='imgCardDetail' /></SwiperSlide>
                        </div>
                    :
                    <div>
                        {MyDetailArray.picture2 ?
                            <div>
                                <SwiperSlide><img src={MyDetailArray.picture1} alt='ImgProd' className='imgCardDetail' /></SwiperSlide>
                                <SwiperSlide><img src={MyDetailArray.picture2} alt='ImgProd' className='imgCardDetail' /></SwiperSlide>
                            </div>
                        :
                        <div>
                                <SwiperSlide><img src={MyDetailArray.picture1} alt='ImgProd' className='imgCardDetail' /></SwiperSlide>
                            </div>
                        }
                        </div>
                    }
                    </Swiper>
                </div>
                <div className='divCardContentDetail'>
                    { MyDetailArray.descuento ?
                        <div className='divCardContentDetail'>
                            <h3 className='NameDetailFont'>{MyDetailArray.name}</h3>
                            <div className="divTextDescDetail">
                                <h4 className="textDescAuxDetail"> $ {MyDetailArray.price}</h4>
                                <h5 className="textDescDetail">-{100*MyDetailArray.descuento}%</h5>
                            </div>
                            <h4 className="PriceFont"> ${MyDetailArray.price - (MyDetailArray.price* MyDetailArray.descuento)} </h4>
                            <p>{MyDetailArray.detail}</p>
                            <h5>Stock Disponible: {MyDetailArray.stock}</h5>
                            <div className="card-footer">
                                { count ?
                                    <Link to='/Cart'>
                                        <button className="myButtton"><span>Ir al Carrito</span></button>
                                    </Link>
                                :
                                <div>
                                    <ItemCount init={1} stock={MyDetailArray.stock} onAdd={onAdd}/>
                                </div>
                                }
                            </div>
                        </div>
                    :
                        <div className='divCardContentDetail'>
                            <h3 className='NameDetailFont'>{MyDetailArray.name}</h3>
                            <h4 className="PriceFont">$ {MyDetailArray.price}</h4>
                            <p>{MyDetailArray.detail}</p>
                            <h5>Stock Disponible: {MyDetailArray.stock}</h5>
                            <div className="card-footer">
                                { count ?
                                    <Link to='/Cart'>
                                        <button className="myButtton"><span>Ir al Carrito</span></button>
                                    </Link>
                                :
                                    <ItemCount init={1} stock={MyDetailArray.stock} onAdd={onAdd}/>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
            }
            <div className='CardRecomendacion'>
                <h1 className='CardRecomH1'>Quienes vieron este producto también compraron:</h1>
                <div className="CardListAuxiliar">
                    <ItemDescList myArray={producto}/>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail