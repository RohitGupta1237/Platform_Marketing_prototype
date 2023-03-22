import React from 'react';
import './typeofservice.css';


function Appservice() {
  
  return (
    <div className="container">
      <h1>Welcome to our website!</h1>
      <p>Please select the type of service you require:</p>
      <button className="self-service">Self-Service</button>
      <button className="contract-based">Contract-Based</button>
    </div>
  );
}

export default Appservice;
