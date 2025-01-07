import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import hospitalService from "../services/hospitalService";

const HospitalPage = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    hospitalService.getNearbyHospitals()
      .then((data) => setHospitals(data))
      .catch((error) => console.error("Error fetching hospitals:", error));
  }, []);

  return (
    <Container>
      <h2>Nearby Hospitals</h2>
      <ListGroup>
        {hospitals.map((hospital) => (
          <ListGroup.Item key={hospital.id}>
            <h5>{hospital.name}</h5>
            <p>{hospital.specialization}</p>
            <p>ICU Availability: {hospital.icuAvailable ? "Available" : "Not Available"}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default HospitalPage;
