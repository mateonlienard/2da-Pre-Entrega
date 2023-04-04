import ItemDetailContainer from '../components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom';

function ItemRoot(){
    const params= useParams()
    const ProductoRoute= Boolean(params.id);

    return(
        <div>
            <ItemDetailContainer ProductoRoute={ProductoRoute} ProductoId={params.id} />
        </div>
    )
}

export default ItemRoot;