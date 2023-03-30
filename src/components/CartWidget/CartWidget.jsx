import './carrito.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from '../../context';

function CartWidget(){
    const {productosCarro}=useContext(Context)

    return(
        <div className='carrito'>
            <FontAwesomeIcon icon={faCartShopping} />
            {cart.lenght}
        </div>
    )
}

export default CartWidget;