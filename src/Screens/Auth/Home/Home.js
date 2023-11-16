import React, { useEffect,useState} from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState( { latitude: 19.871872097931004, longitude: 75.39618197806836 });
  const destination = { latitude: 19.871872097931004, longitude: 75.39618197806836 };
  // useEffect(() => {
  //   const watchId = Geolocation.watchPosition(
  //     (position) => {
  //       console.log("pos",position)
  //       const { latitude, longitude } = position.coords;
  //       console.log("pos2",latitude,)

  //       setCurrentLocation({ latitude:latitude, longitude:longitude });
  //     },
  //     (error) => console.error(error),
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 20000,
  //       maximumAge: 1000,
  //       distanceFilter: 10,
  //     }
  //   );

  //   return () => {
  //     Geolocation.clearWatch(watchId);
  //   };
  // }, []);

  return (
<View 
        style={{
          minHeight: 250,
          justifyContent: 'center',
          width: '100%',
          position: 'relative',
        }}>
          <MapView
        style={styles.map}
        initialRegion={{
          latitude: currentLocation?.latitude,
          longitude: currentLocation?.longitude ,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapViewDirections
          origin={currentLocation}
          destination={destination}
          apikey="AIzaSyC3gIV1J4v3l9gsjLUrjMYdauqKbvXB_sU" // Replace with your Google Maps API key
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true} // Enable alternative routes
          onReady={(result) => {
            console.log(`Distance: ${result?.distance} km`);
            console.log(`Duration: ${result?.duration} min`);
          }}
        />
{currentLocation && (
          <Marker
          draggable
          onDrag={(e) => {
            setCurrentLocation({ latitude:e?.nativeEvent?.coordinate?.latitude, longitude:e.nativeEvent.coordinate.longitude });
            console.log(e.nativeEvent.coordinate)
          }}
            coordinate={currentLocation}
            title="Current Location"
            pinColor="blue"
          />
        )}       
         <Marker coordinate={destination} title="Destination" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    // borderRadius: 20,
  },
});

export default Home;
