import React, { useState } from 'react';

function LocationFinder() {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState(null);

  const handleGeocode = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${address}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          const { lat, lon } = data[0];
          setCoordinates({ lat, lon });
        } else {
          alert('Location not found');
        }
      } else {
        alert('Error fetching location data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Location Finder</h1>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter an address"
      />
      <button onClick={handleGeocode}>Geocode</button>
      {coordinates && (
        <div>
          Latitude: {coordinates.lat}, Longitude: {coordinates.lon}
        </div>
     ) }
    </div>
  );
}

export default LocationFinder;

