import {FlatList, StyleSheet, View} from 'react-native';
import {Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import {Array} from '../../../Constants/Constant';
import HotelCard_2 from '../../Home/Components/HotelCard_2';

const {height} = Dimensions.get('screen');
const WaitsMapScreen = () => {
  const initialState = {
    latitude: 18.563796323878364,
    longitude: 73.76610255671079,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <View style={Style.container}>
      <MapView style={Style.mapStyle} initialRegion={initialState} />
      <FlatList
        data={Array}
        renderItem={({item}) => {
          return (
            <View style={Style.renderItemContainer}>
              <HotelCard_2
                Title={item?.Title}
                subText={item?.subText}
                ImageName={item?.ImageName}
              />
            </View>
          );
        }}
        horizontal={true}
      />
    </View>
  );
};

export default WaitsMapScreen;

const Style = StyleSheet.create({
  container: {flexDirection: 'column', alignItems: 'center'},
  mapStyle: {
    width: height * 0.42,
    height: height * 0.24,
    marginTop: height * 0.02,
  },
  renderItemContainer: {flex: 1, paddingHorizontal: height * 0.012},
});
