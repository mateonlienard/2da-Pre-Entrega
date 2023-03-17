import NavBar from "../NavBar";
import {Outlet as Page} from 'react-router-dom'
import Header from "../Header";
import Footer from "../Footer";

function Layout(){
    return(
        <main>
            <Header />
            <NavBar />
            <Page />
            <Footer />
        </main>
    )
}

export default Layout;