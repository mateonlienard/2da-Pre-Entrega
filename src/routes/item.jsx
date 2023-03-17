import ItemDetailContainer from '../components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom';
import Footer from '../components/Footer';

function ItemRoot(){
    const params= useParams()
    const ProductoRoute= Boolean(params.id);

    return(
        <div>
            <ItemDetailContainer ProductoRoute={ProductoRoute} productoId={params.id} />
        </div>
    )
}

export default ItemRoot;