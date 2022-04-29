import { addDoc, arrayRemove, collection, getFirestore } from "firebase/firestore";
import { createContext, useState, useContext} from "react";
import { ToastContainer, toast } from 'react-toastify';

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)


const CartContextProvider =({children})=>{
    const [listaCarrito, setlistaCarrito] = useState([])


    const AgregarAlCarrito=(prod)=>{
        let  productoEncontrado = listaCarrito.find(producto => producto.id === prod.id )
        if(productoEncontrado){
            let nuevaListaCarrito = listaCarrito.map(productoCarrito=>{
                if(productoCarrito.id === productoEncontrado.id){
                    productoCarrito.units= productoCarrito.units + prod.units
                }
                return productoCarrito
            })
            setlistaCarrito(nuevaListaCarrito)
        }else{
            if(prod.descuento>0){
                prod.price = prod.price - (prod.price*prod.descuento)
            }
            setlistaCarrito( [... listaCarrito, prod] )
        }
    }

    const BorrarCarrito=()=>{
        setlistaCarrito([])
    }

    const PrecioTotal=()=>{
        return listaCarrito.reduce((acum, prod) => acum +(prod.units *prod.price), 0)
    }

    const BorrarProd=(id)=>{
        setlistaCarrito(listaCarrito.filter(prod => prod.id !== id))
    }

    const CantidadTotalCarrito=()=>{
        return listaCarrito.reduce((acum, prod) => acum += prod.units , 0)
    }
/////////////////////////////////////////////////////////////////////////
    const RestaUnit=(id)=>{
        let Target = listaCarrito.find( producto=>producto.id === id.id)
        if(Target.units>1){
            let nuevaListaCarrito = listaCarrito.map(productoCarrito=>{
                if(productoCarrito.id === Target.id){
                    productoCarrito.units= productoCarrito.units - 1
                }
                return productoCarrito
            })
            setlistaCarrito(nuevaListaCarrito)
        }
    }

    const SumaUnits=(id)=>{
        let Target = listaCarrito.find( producto=>producto.id === id.id)
        if(Target.units<Target.stock){
            console.log(Target.units)
            let nuevaListaCarrito = listaCarrito.map(productoCarrito=>{
                if(productoCarrito.id === Target.id){
                    productoCarrito.units= productoCarrito.units + 1
                }
                return productoCarrito
            })
            setlistaCarrito(nuevaListaCarrito)
        }else{
            console.log('Si deseas adquirir esa cantidad de productos contactate con nosotros para ser comprador mayorista!')
        }
    }

    const notify = () =>{
        toast.success('Producto añadido al carrito!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        console.log('hola')
    }


    return(
        <CartContext.Provider value={{
            listaCarrito,
            AgregarAlCarrito,
            BorrarCarrito,
            BorrarProd,
            PrecioTotal,
            CantidadTotalCarrito,
            RestaUnit,
            SumaUnits,
            notify
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider