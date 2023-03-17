import NavBar from '../components/NavBar/index';
import ItemListContainer from '../components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import {useParams} from 'react-router-dom'

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