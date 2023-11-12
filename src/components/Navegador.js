import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import "../styles/styles.css"
function Navegador() {
  const location = useLocation();
  const isActive = (location.pathname === "/quienes");
  return (
     <Container fluid>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
     
        <Navbar.Brand as={Link} to="/"><img height="90" className="d-inline-block align-center" src="./images/logo_trans_small.png" alt="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/quienes">Quienes Somos</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/galeria">Galería</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Container>
    
  );
}

export default Navegador;