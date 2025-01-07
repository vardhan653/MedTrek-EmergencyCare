import axios from "axios";

const API_URL = "http://localhost:5000/api/hospitals";

const getNearbyHospitals = () => {
  return axios.get(API_URL);
};

export default {
  getNearbyHospitals,
};
