import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StudentMarks from './component/StudentMarks';
import AdmissionForm from './component/AdmissionForm';
function App() {
  return (
    <Router>
          <div className="App">
          <Route exact path="/" component={StudentMarks} />
          <Route exact path="/form" component={AdmissionForm} />
    </div>
    </Router>

  );
}

export default App;
