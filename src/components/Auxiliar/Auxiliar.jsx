import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from '../../context/CartContext';


const Auxiliar=()=>{

    const {notify}=useCartContext()

    return(
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer/>
        </div>
    )

}
export default Auxiliar