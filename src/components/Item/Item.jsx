import { Link } from "react-router-dom"
import ItemDesc from "../ItemDesc/ItemDesc"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../Css.css'

const Item =(myArray)=>{
    return(
        <div>
            {myArray.descuento ?
                <ItemDesc 
                id={myArray.id} 
                name={myArray.name} 
                picture1={myArray.picture1} 
                stock={myArray.stock} 
                price={myArray.price}
                descuento={myArray.descuento}
                />
            :
                <div>
                    <div className='divCard'>
                        <div className='divImg'>
                            <img src={myArray.picture1} alt='' className='imgCard'/>
                        </div>
                        <div className='divCardContent'>
                            <h3>{myArray.name}</h3>
                            <h4>$ {myArray.price}</h4>
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
                </div>
            }
        </div>
    )
}
export default Item