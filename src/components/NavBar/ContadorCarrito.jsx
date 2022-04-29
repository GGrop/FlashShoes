import { useCartContext } from '../../context/CartContext'
const ContadorCarrito =()=>{

const{CantidadTotalCarrito}= useCartContext()

const Cant =CantidadTotalCarrito()

    return(
        <div>
            { Cant ?
            <i className='countCarrito'>{Cant}</i>
            :
            <div> </div>
            }
        </div>
    )
}
export default ContadorCarrito


// return(
//     <i className='countCarrito'>{Cant}</i>
// )

