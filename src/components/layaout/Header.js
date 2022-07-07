import React, {  } from "react";
// import { Link } from 'react-router-dom'
import { Navbar, Container,Nav,Form,Button,FormControl} from 'react-bootstrap'
import '../../App'

const Header = () => {
  return (
 

    <Navbar bg="dark"  expand="lg"  variant="dark" fluid >
    <Container fluid>
      <Navbar.Brand href="#">MecaCode</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Inicio</Nav.Link>
             
          <Nav.Link href="#action2"> ¿ Sobre Nosotros ? </Nav.Link>
             
          <Nav.Link href="#action2">  Acessorios  </Nav.Link>
             
          <Nav.Link href="#action2">  Servicios  </Nav.Link>
             
          <Nav.Link href="#action2">  Contacto  </Nav.Link>
        
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};
export default Header;
