import Item from "../Item/Item"

const ItemList =(productos)=>{
    return(
        productos.myArray.map((prod)=>
            <Item
            key={prod.id}
            id={prod.id} 
            name={prod.name} 
            picture1={prod.picture1} 
            stock={prod.stock} 
            price={prod.price}
            descuento={prod.descuento}
            />
        )
    )
}
export default ItemList