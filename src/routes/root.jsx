import ItemListContainer from '../components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom'
import Footer from '../components/Footer';

function Root(){
    const params= useParams()
    const CategoriaRoute= Boolean(params.id);

    return(
        <div>
            <ItemListContainer CategoriaRoute={CategoriaRoute} categoryId={params.id}/>
        </div>
    )
}

export default Root;