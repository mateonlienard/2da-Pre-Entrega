import NavBar from '../components/NavBar/index';
import ItemDetailContainer from '../components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import {useParams} from 'react-router-dom'

function ItemRoot(){
    const params= useParams()
    console.log({params})
    return(
        <div>
            <Header />
            <NavBar />
            <ItemDetailContainer />
        </div>
    )
}

export default ItemRoot;