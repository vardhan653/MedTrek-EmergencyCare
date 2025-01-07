import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import EmergencyPage from "./pages/EmergencyPage";
import HospitalPage from "./pages/HospitalPage";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/emergency" component={EmergencyPage} />
        <Route path="/hospital" component={HospitalPage} />
      </Switch>
    </div>
  );
}

export default App;
