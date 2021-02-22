import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';





function Footer() {
  return (
    <div className="main-footer">
     
      <Container className="Footer">
        <Row>
          <Col md={12}   className="background">
          
            <ul>
              <li className="list-unstyled-link">
              <span><a href="/Home">Contact</a></span>
              </li>
              <li className="list-unstyled-link">
              <span> <a href="#!">About</a></span>
              </li>
              <li className="list-unstyled-link">
              <span> <a href="#!">Support</a></span>
              </li>
              <li className="list-unstyled-link">
              <span> <a href="#!">FAQ</a></span>
              </li>
              <li className="list-unstyled-link">
              <span><a href="#!">Join Us!</a></span>
              </li>
            </ul>
           </Col>
        
        </Row>
      </Container>
      <hr/>
      <Container className="FooterLinks">
        <Row>
          <Col  >
            <p>&copy; {new Date().getFullYear()} Kurier Inc | All right reserved  | <a href="https://www.talentgarden.com">            Terms of Service </a>| Privacy</p>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
// test