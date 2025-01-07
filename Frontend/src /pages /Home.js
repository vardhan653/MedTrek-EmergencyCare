import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Welcome to LifeLink</h2>
          <p>Your trusted platform for emergency medical services, ambulance requests, and blood donations.</p>
          <Link to="/emergency">
            <Button variant="primary">Request Ambulance</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
