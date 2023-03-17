import NavBar from '../components/NavBar/index';
import ItemDetailContainer from '../components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import {useParams} from 'react-router-dom'

function ItemRoot(){
    const params= useParams()
    const ProductoRoute= Boolean(params.id);

    return(
        <div>
            <Header />
            <NavBar />
            <ItemDetailContainer ProductoRoute={ProductoRoute} productoId={params.id} />
        </div>
    )
}

export default ItemRoot;