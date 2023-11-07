// import React, { useEffect, useState } from 'react';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const predefinedLocations = [
  { name: 'Location 1', lat: 36.6944144, lon: -6.1013952 },
  { name: 'Location 2', lat: 36.6970635, lon: -6.0967637634183 },
  { name: 'Location 3', lat: 36.693972, lon: -6.0968421 },
];

function Map() {
  // Replace these coordinates with your user's or geocoded coordinates
  const userCoordinates = { lat: 36.6938461, lon: -6.0933631 };

  return (
    <MapContainer center={[userCoordinates.lat, userCoordinates.lon]} zoom={13} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      <Marker position={[userCoordinates.lat, userCoordinates.lon]}>
        <Popup>You are here</Popup>
      </Marker>
      {predefinedLocations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lon]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;

