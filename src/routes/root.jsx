import NavBar from '../components/NavBar/index';
import ItemListContainer from '../components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import {useParams} from 'react-router-dom'

function Root(){
    const params= useParams()
    const CategoriaRoute= Boolean(params.id);

    console.log(CategoriaRoute)

    return(
        <div>
            <Header />
            <NavBar />
            <ItemListContainer CategoriaRoute={CategoriaRoute} categoryId={params.id}/>
        </div>
    )
}

export default Root;