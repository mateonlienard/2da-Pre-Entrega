import './header.css'
import monitorled from '../../assets/monitorled.png'

function Header(){
    return(
    <div className='header'>
        <div className="icono"><img src={monitorled} alt="Logo empresa" style={{width: '150px', height: '150px'}} /></div>
        <h1 className="bienvenida">¡Seguí confiando en nosotros!</h1>
    </div>
    )
}
export default Header;