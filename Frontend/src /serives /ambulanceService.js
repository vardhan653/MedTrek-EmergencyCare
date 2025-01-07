import axios from "axios";

const API_URL = "http://localhost:5000/api/ambulances";

const requestAmbulance = (data) => {
  return axios.post(`${API_URL}/request`, data);
};

export default {
  requestAmbulance,
};
