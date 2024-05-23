import React from 'react';
import { Container, Navbar, Nav, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';

const Simple = () => {
  return (
    <div>
      {/* Header */}
      <Navbar variant="light" className="justify-content-center" style={{backgroundColor:'#ea8f2e'}}>
        <Container className='w-50'>
          <Navbar.Brand href="#home" className='bg-white text-center'>
            <Image
              src= {logo}
              alt="FPT University Logo"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      <Navbar style={{backgroundColor:'#ea8f2e'}} className="justify-content-center">
        <Nav className="nav-links">
          <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
          <Nav.Link href="#about" className='text-white'>About</Nav.Link>
          <Nav.Link href="#contact" className='text-white'>Contact</Nav.Link>
        </Nav>
      </Navbar>

      {/* Main Content */}
      <Container className="my-5 text-center">
        <Row>
          <Col>
            <h2 id="about">About</h2>
            <p>This is the about section of the website.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 id="contact">Contact</h2>
            <p>For any inquiries, please contact us at example@example.com.</p>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="text-center text-white py-3" style={{backgroundColor:"#f2ca81"}}>
        <Container>
          <p>© 2023 Website. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Simple;
