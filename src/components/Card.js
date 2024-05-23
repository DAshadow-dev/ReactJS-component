import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';

const Card = () => {
  return (
    <Container className="border p-3 mt-5" style={{ maxWidth: '500px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <Row>
        <Col xs={3} className="d-flex align-items-center justify-content-center p-0">
          <img 
            src={logo} 
            alt="Placeholder" 
            className="img-fluid" 
            style={{ width: '100%', height: 'auto' }}
          />
        </Col>
        <Col>
          <h5 className="text-warning">A Title</h5>
          <p className="text-muted">The description goes here.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Card;
