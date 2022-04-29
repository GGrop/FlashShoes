import {NavLink} from 'react-router-dom'

const CartNoCart=()=>{
    return(
        <div className="cartNoCartContainer">
            <h2>No hay productos en su carrito!</h2>
            <NavLink to='/categoria/running'>
                <button className="myButtton Vist"><span className="vistSpan">Visitar Store</span></button>
            </NavLink>
        </div>
    )
}

export default CartNoCart