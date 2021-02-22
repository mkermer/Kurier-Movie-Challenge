/* import React from "react";
import { Form, Button} from 'react-bootstrap';
import './Navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (

    
    <nav class="navbar">
        <a class="navbar-brand" href="#">Kurier Movie Challenge</a>
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <button class="btn btn-sm btn-outline-secondary " type="button" href="/Login">Smaller button</button>
        <Button class="btn btn-sm btn-outline-secondary" variant="secondary" type="button" href="/Login">
              Login
            </Button>
        
    </nav>
  );
}

export default Navigation;
 */





import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #b60017; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: black; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

const Navigation = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Kurier Movie Challenge</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/Login">Login</Nav.Link></Nav.Item> 
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default Navigation;