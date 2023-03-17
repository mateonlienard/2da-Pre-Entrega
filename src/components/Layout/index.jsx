import NavBar from "../NavBar";
import {Outlet as Page} from 'react-router-dom'
import Header from "../Header";

function Layout(){
    return(
        <main>
            <Header />
            <NavBar />
            <Page />
        </main>
    )
}

export default Layout;