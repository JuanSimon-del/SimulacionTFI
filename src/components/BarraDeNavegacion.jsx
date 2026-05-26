import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BarraDeNavegacion() {
  return (
    <Navbar expand="lg" className="navbar px-5 py-3">
        <img src="./public/logo.png" alt="Logo de la empresa" className="logo me-3"/>
        <Navbar.Brand href="#home" className="text-light titulo fs-4 navbar-Brand">
          Centro Basura Cero
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-light'>Link</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
    </Navbar>
  );
}

export default BarraDeNavegacion;
