import { useCartContext } from "../../context/CartContext"

const CartItemCount=(value)=>{
    const{RestaUnit, SumaUnits} = useCartContext()

    const Resta=()=>{
        RestaUnit(value)
    }
    const Suma=()=>{
        SumaUnits(value)
    }
    return(
        <div className="">
            <button className="myButtton BtnAddRes2" onClick={Resta}><span>-</span></button>
            <button className="myButtton BtnAddRes2" onClick={Suma}><span>+</span></button>
        </div>
    )
}
export default CartItemCount