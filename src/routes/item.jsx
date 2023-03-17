import NavBar from '../components/NavBar/index';
import ItemDetailContainer from '../components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import {useParams} from 'react-router-dom'
import ItemDetail from '../components/ItemDetail';

function ItemRoot(producto){
    const params= useParams()
    console.log({params})
    return(
        <div>
            <Header />
            <NavBar />
            <ItemDetail producto={producto} key={producto.id} />
        </div>
    )
}

export default ItemRoot;