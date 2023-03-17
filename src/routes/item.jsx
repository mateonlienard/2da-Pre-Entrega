import NavBar from '../components/NavBar/index';
import ItemDetailContainer from '../components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';

function ItemRoot(){
    return(
        <div>
            <Header />
            <NavBar />
            <ItemDetailContainer />
        </div>
    )
}

export default ItemRoot;