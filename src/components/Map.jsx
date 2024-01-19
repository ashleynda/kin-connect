import { useState, useEffect} from 'react';
import { withGoogleMap, GoogleMap, Marker } from '@react-google-maps';



const Map = withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.center}
  >
    <Marker position={props.center} />
  </GoogleMap>
));

const GoogleMapComponent= ()=> {
  const[location, setLocation]=useState(null);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude}= position.coords;
        setLocation({lat: latitude, lng: longitude});
      },
      (error)=> {
        console.error('Error getting location:',error.message);
      }
    );
  }, []);

  return (
    <div style={{ height: '400px',width:'100%'}}>
      {location && (
        <Map
          containerElement={<div style={{ height:'100%'}}/>}
          MapElement={<div style={{height:'100%'}}/>}
          center={location}
        />
      )}
    </div>
  );
};


export default GoogleMapComponent









  /* {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_APIKEY,
    libraries,
  });

    


  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}; */

