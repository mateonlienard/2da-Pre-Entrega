import './carrito.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from '../../context';
import { Link } from 'react-router-dom';

function CartWidget(){
    const {totalItemsEnCart}=useContext(Context)

    return(
        <Link to='/cart'>
            <div className='carrito'>
                <FontAwesomeIcon icon={faCartShopping} />
                <p>{totalItemsEnCart}</p>
            </div>
        </Link>
    )
}

export default CartWidget;