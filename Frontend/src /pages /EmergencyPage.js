import React, { useState } from "react";
import { Container, Button, Form, Alert } from "react-bootstrap";
import ambulanceService from "../services/ambulanceService";

const EmergencyPage = () => {
  const [location, setLocation] = useState("");
  const [emergencyType, setEmergencyType] = useState("");
  const [message, setMessage] = useState(null);

  const handleRequestAmbulance = () => {
    const data = { location, emergencyType };
    ambulanceService.requestAmbulance(data)
      .then((response) => {
        setMessage("Ambulance Requested Successfully!");
      })
      .catch((error) => {
        setMessage("Failed to request ambulance.");
      });
  };

  return (
    <Container>
      <h2>Request Emergency Ambulance</h2>
      {message && <Alert variant="info">{message}</Alert>}
      <Form>
        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmergencyType">
          <Form.Label>Emergency Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter emergency type (e.g., heart attack)"
            value={emergencyType}
            onChange={(e) => setEmergencyType(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleRequestAmbulance}>
          Request Ambulance
        </Button>
      </Form>
    </Container>
  );
};

export default EmergencyPage;
