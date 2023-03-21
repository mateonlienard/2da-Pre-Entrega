import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
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
              <NavDropdown.Item ><Nav.Link as={Link} to={'/category/Mouses'}>Mouses</Nav.Link></NavDropdown.Item>
              <NavDropdown.Item ><Nav.Link as={Link} to={'/category/Auris'}>Auriculares</Nav.Link></NavDropdown.Item>
              <NavDropdown.Item ><Nav.Link as={Link} to={'/category/Monitores'}>Monitores</Nav.Link></NavDropdown.Item>
              <NavDropdown.Item ><Nav.Link as={Link} to={'/category/TVS'}>Televisores</Nav.Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link as={Link} to={''}>Contacto</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;