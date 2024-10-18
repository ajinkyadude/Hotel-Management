import {Text, View} from 'react-native';
import MapView from 'react-native-maps';

interface mapScreenProp {
  latitude: number;
  longitude: number;
}

const MapScreen = props => {
  console.log(' latitude', props?.route?.params?.latitude);
  let long = props?.route?.params?.longitude;
  let lat = props?.route?.params?.latitude;

  console.log(' log   ', long);

  return (
    <View>
      <Text>Map</Text>
      <MapView
        style={{width: '100%', height: '100%'}}
        //specify our coordinates.
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default MapScreen;
