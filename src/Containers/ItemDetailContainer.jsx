import ItemDetail from '../components/ItemDetail/ItemDetail.jsx'
import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import { doc, getFirestore, getDoc } from 'firebase/firestore'

const ItemDetailContainer=()=>{

    const[Item, setItem]= useState([])
    const{detalleId}= useParams()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            const db = getFirestore()
            const queryDb = doc(db, 'productos',detalleId)
            getDoc(queryDb)
            .then(resp=> setItem({id:resp.id, ...resp.data()})) 
            .catch(err => console.log(err))
            .finally(()=> setLoading(0))
        },400)
    },[detalleId])

    return(
    <div className='CardListDetail'>
        { loading ?
            <div className="flexito">
                <div className="lds-roller boxing"><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div></div>
            </div>
        :
            <div className='CardListDetail'>
                <ItemDetail 
                    id={Item.id}
                    name={Item.name}
                    picture1={Item.picture1}
                    picture2={Item.picture2}
                    picture3={Item.picture3}
                    stock={Item.stock}
                    price={Item.price}
                    detail={Item.detalle}
                    descuento={Item.descuento}
                />
            </div>
        }
    </div>
    )
}
export default ItemDetailContainer