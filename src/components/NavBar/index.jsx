import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(){
    return (
                    <nav className="lugar-tabla">
                        <ul className="tabla">
                            <li className='d-flex justify-content-start'><a className=' articulo' href="index.html">Inicio</a></li>
                            <CartWidget />
                        </ul>
                    </nav>
    )
}

export default NavBar;