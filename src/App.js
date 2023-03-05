import React from 'react';

// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';

function App() {
  
  const data = {
    heartRate:120,
    bloodPressure:120/80,
    bodyTemp:98.5,
    respirationRate:97
  }

  return (
    <div>

      <div class="container">
        <div class="card">
          <h2>Heart Rate</h2>
          <p id="heart-rate"></p>   
          <p>{data.heartRate}</p>     
        </div>

        <div class="card">
          <h2>Blood Pressure</h2>
          <p id="blood-pressure"></p>
          <p>{data.bloodPressure}</p>   
        </div>

        <div class="card">
          <h2>Body Temperature</h2>
          <p id="body-temp"></p>
          <p>{data.bodyTemp}</p>   
        </div>

        <div class="card">
          <h2>Respiration Rate</h2>
          <p id="respiration-rate"></p>
          <p>{data.respirationRate}</p>
        </div>
        
      </div>

    </div>
  );
}

export default App;