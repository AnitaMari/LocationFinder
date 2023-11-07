import React from 'react';
import './App.css';
import LocationFinder from './LocationFinder';
import Map from './Map';
import GetLocation from './GetLocation';

function App() {
  return (
    <div className="App">
      <LocationFinder />
      <GetLocation />
      <Map />
    </div>
  );
}

export default App;
