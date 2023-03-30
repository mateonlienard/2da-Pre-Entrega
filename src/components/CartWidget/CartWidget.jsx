import './carrito.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from '../../context';

function CartWidget(){
    const {totalItemsEnCart}=useContext(Context)

    return(
        <div className='carrito'>
            <FontAwesomeIcon icon={faCartShopping} />
            {totalItemsEnCart}
        </div>
    )
}

export default CartWidget;