import NavBar from '../components/NavBar/index';
import ItemListContainer from '../components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';

function Root(){
    return(
        <div>
            <Header />
            <NavBar />
            <ItemListContainer />
        </div>
    )
}

export default Root;