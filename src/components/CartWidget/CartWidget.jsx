import './carrito.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function CartWidget(){
    return(
        <div className='carrito'>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>3</p>
        </div>
    )
}

export default CartWidget;