// import { useState, useEffect} from 'react';
// // import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';



// // import { withGoogleMap } from 'react-google-maps';

// const Map = (() => {
  


//   useEffect(() => {

//     let activateLink = (link) => {
//       const script = document.createElement('script');
//       script.src = link;
//       document.head.appendChild(script);
//    }

//    activateLink("https://maps.googleapis.com/maps/api/js?key=AIzaSyDGucPQopQX5V6k-ndIaixUAyFVvkD45zU&callback=getCurrentLocation");

//   }, [])

  

//   function showLocation(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     const locationElement = document.getElementById('location');
//     locationElement.innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;
//     initMap(latitude, longitude);
//   }

//   const showError = (error) => {
//     const locationElement = document.getElementById('location');
//     locationElement.innerHTML = `Error getting location: ${error.message}`;
//   };

//   function getCurrentLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showLocation, showError);
//     } else {
//       alert('Geolocation is not supported by your browser');
//     }
//   }

//   function initMap(lat, long) {
//     try {
//       const mapDiv = document.getElementById('map');

//       var myLatlng = new window.google.maps.LatLng(lat, long);
//       var mapOptions = {
//         zoom: 18,
//         center: myLatlng,
//         mapTypeId: 'roadmap',
//       };
//       var map = new google.maps.Map(mapDiv, mapOptions);

//       const marker = new window.google.maps.Marker({
//         position: { lat: lat, lng: long },
//         map: map,
//         title: 'User Location',
//       });

//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }



//   // Return JSX to render the map component
//   return (
//     <div>
//       <div id="location"></div>
//       <div id="map"></div>
//     </div>
//   );

// });

// export default Map;


import { useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Map = () => {
  useEffect(() => {
    
    const activateLink = async(link) => {
      const script = await document.createElement('script');
      script.src = link;
      script.async = true;
      script.defer = true;

      // Callback function to execute when the script is loaded
      script.onload = () => {
        // Your logic to initialize the map or call other functions
        getCurrentLocation();
      };

      document.head.appendChild(script);
    };

 
   const initMap = () => {
  const mapDiv = document.getElementById('map');
  if (mapDiv) {
    const myLatlng = new window.google.maps.LatLng(6.1723, 3.0965 );
    const mapOptions = {
      zoom: 18,
      center: myLatlng,
      mapTypeId: 'roadmap',
    };
    const map = new window.google.maps.Map(mapDiv, mapOptions);
    map.setMapTypeId('roadmap');

    const marker = new window.google.maps.Marker({
      position: { lat: 6.1723 , lng: 3.0965 },
      map: map,
      title: 'User Location',
    });
  }
};

  }); // Empty dependency array means this effect runs once on mount


  function showLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const locationElement = document.getElementById('location');
    locationElement.innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;
  }

  const showError = (error) => {
    const locationElement = document.getElementById('location');
    locationElement.innerHTML = `Error getting location: ${error.message}`;
  };

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLocation, showError);
    } else {
      alert('Geolocation is not supported by your browser');
    }
  }

  // Function to initialize the map
  // const initMap = () => {
  //   const mapDiv = document.getElementById('map');
  //   if (mapDiv) {
  //     const myLatlng = new window.google.maps.LatLng(/* Your latitude and longitude values */);
  //     const mapOptions = {
  //       zoom: 18,
  //       center: myLatlng,
  //       mapTypeId: 'roadmap',
  //     };
  //     const map = new window.google.maps.Map(mapDiv, mapOptions);
  //     map.setMapTypeId('roadmap');

  //     const marker = new window.google.maps.Marker({
  //       position: { lat: 6.1723 , lng: 3.0965 },
  //       map: map,
  //       title: 'User Location',
  //     });
  //   }
  // };

  return (
        <div>
          <div id="location"></div>
          <div id="map"></div>
        </div>
      );

  // Rest of your component code
};

export default GoogleMap;
