import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css';

function NavBar() {
  return (
    <Navbar className="lugar-tabla" expand="lg">
      <Container className='' fluid>
        <Navbar.Brand className='text-white' href="#">Electrodomesticos Matu</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item ><Link className='linkNavbar' to={'/category/Mouses'}>Mouses</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link className='linkNavbar' to={'/category/Auris'}>Auriculares</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link className='linkNavbar' to={'/category/Monitores'}>Monitores</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link className='linkNavbar' to={'/category/TVS'}>Televisores</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link as={Link} to={''}>Contacto</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;