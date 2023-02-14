import React from 'react';
import './style.css';
import FormComponent from './FormComponent';
import DoctorCards from './DoctorCards';
import Navigation from './Navigation';
import Tests from './Tests';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './';
export default function App() {
  return (
    <div className="container-fluid bg-light px-0 pb-5">
      <Router>
        <Navigation />
      </Router>
      <DoctorCards />
      <Tests />
      <FormComponent />
    </div>
  );
}
