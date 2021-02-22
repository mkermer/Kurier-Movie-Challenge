import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import Searchbar from './Searchbar';


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

  {/*     <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>  */}

      

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/Login">Login</Nav.Link></Nav.Item> 
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default Navigation;