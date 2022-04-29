import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import '../Css.css'

const ItemCount=({init, stock, onAdd})=>{

    const[count, setCount] =useState(init)
    const {notify}=useCartContext()

    const suma =()=>{
        if(count<stock){
            setCount(count+1)
        }else{
            console.log('Si deseas adquirir esa cantidad de productos contactate con nosotros para ser comprador mayorista!')
        }
    }
    const resta=()=>{
        if(count>init){
            setCount(count-1)
        }
    }
    const addCarrito=()=>{
        onAdd(count)
        setCount(init)
        notify()
    }
    return (
        <div className="mySelectorCarritoContainer">
            <div className="mySelectorCarrito">
                <button className="myButtton BtnAddRes" onClick={resta}><span>-</span></button>
                <label className="myLabel"><span className="SpanCount">{count}</span></label>
                <button className="myButtton BtnAddRes" onClick={suma}><span>+</span></button>
            </div>
            <button className="myButtton BtnDetail" onClick={addCarrito} onclick={notify}>
                <span>Añadir al carrito</span>
            </button>
        </div>
    )
}

export default ItemCount