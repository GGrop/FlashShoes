import { NavLink } from "react-router-dom"

const Store =()=>{
    return(
        <div className="hoverDown items">
            <p className="buttonHover">STORE</p>
            <div className="HoverContent">
                <div className="items">
                    <NavLink to="categoria/running"><p>running</p></NavLink>
                </div>
                <div className="items">
                    <NavLink to="categoria/street"><p>street</p></NavLink>
                </div>
                <div className="items">
                    <NavLink to="categoria/accesorio"><p>accesorios</p></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Store