import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const Discover = () => {
  const [coord, setCoord] = useState();
  const initialRegion = {
    latitude: 41.0391683,
    longitude: 28.9982707,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  Geolocation.getCurrentPosition(
    c =>
      setCoord({
        latitude: c.coords.latitude,
        longitude: c.coords.longitude,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      }),
    error => console.log(error),
    {
      enableHighAccuracy: true,
    },
  );
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{width: width, height: height / 4}}
      initialRegion={initialRegion}>
      {coord !== undefined && <Marker coordinate={coord} />}
    </MapView>
  );
};

export default Discover;
