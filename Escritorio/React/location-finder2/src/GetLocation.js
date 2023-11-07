import React, { useState, useEffect } from 'react';

function GetLocation() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Check if geolocation is available in the browser
    if ('geolocation' in navigator) {
      // Request the user's location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.log('Geolocation is not available in this browser.');
    }
  }, []);

  return (
    <div>
      <h1>Get Location</h1>
      {userLocation ? (
        <div>
          Your location: Latitude: {userLocation.lat}, Longitude: {userLocation.lon}
        </div>
      ) : (
        <div>Fetching your location...</div>
      )}
    </div>
  );
}

export default GetLocation;
