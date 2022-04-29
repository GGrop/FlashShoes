import { Link } from "react-router-dom"
import '../Css.css'

const ItemDesc =(myArray)=>{
    return(
        <div  className='divCardDesc'>
            <div className='divImg'>
                <img src={myArray.picture1} alt='' className='imgCard'/>
            </div>
            <div className='divCardContent'>
                <h3>{myArray.name}</h3>
                <div className="divTextDesc">
                    <h4 className="textDescAux"> $ {myArray.price}</h4>
                    <h5 className="textDesc">-{100*myArray.descuento}%</h5>
                </div>
                <h4 className=""> $ {myArray.price - (myArray.price* myArray.descuento)} </h4>
            </div>
            <div className="DivButton">
                <Link to={`/detalle/${myArray.id}`}>
                    <button className="myButtton">
                        <span className="fa-solid fa-bag-shopping bagButton"></span>
                        <span>Ver</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default ItemDesc
