import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BlueWrapper from '../../Auth/CommonComponents/BlueWrapper';
import WhiteWrapper from '../../Auth/CommonComponents/WhiteWrapper';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Colors,
  Icon_Name,
  NearbyLocationList,
} from '../../../Constants/Constant';
import {FontType} from '../../../Constants/FontType';
import {String} from '../../../Constants/String';
import Search from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import NearbyLocationCard from './NearbyLocationCard';
import {check, request, RESULTS, PERMISSIONS} from 'react-native-permissions';
import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

const {height, width} = Dimensions.get('screen');

const SearchLocation = ({navigation}: any) => {
  const [locationPer, setLocationPer] = useState('');
  const [geoLocation, setGeoLocation] = useState(false);
  const backHandle = () => {
    navigation.goBack();
  };
  const getCordinates = () => {
    if (locationPer == RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          setGeoLocation(position);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
          setGeoLocation(false);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  useEffect(() => {
    if (locationPer == RESULTS.GRANTED) {
      getCordinates();
    }
  }, [locationPer]);
  const requstHandler = async () => {
    try {
      const location = await check(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_ALWAYS
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
      setLocationPer(location);
      getCordinates();
      Platform.OS === 'ios'
        ? console.log(' IOS  ***  ' + location)
        : console.log(' android   **** ' + location);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requstHandler();
    // request()
  }, []);

  useEffect(() => {
    if (locationPer !== RESULTS.GRANTED) {
      handleGrantPermission();
    }
  }, [locationPer]);

  const handleGrantPermission = async () => {
    if (locationPer != RESULTS.GRANTED) {
      const permissionResult = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_ALWAYS
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
      console.log(' permissionResult  ', permissionResult);

      setLocationPer(permissionResult);
      getCordinates();
    }
  };

  console.log(' location  **  ', locationPer);

  const MapNavigateHandle = () => {
    navigation.navigate('GeoLocationScreen', {
      latitude: geoLocation?.coords?.latitude,
      longitude: geoLocation?.coords?.longitude,
    });
  };

  return (
    <View style={Style.main}>
      <BlueWrapper>
        <View style={Style.mainContainer}>
          <TouchableOpacity onPress={backHandle}>
            <Icon name={Icon_Name.back} size={21} color={Colors.White} />
          </TouchableOpacity>
          <Text style={Style.select_location}>{String.select_location}</Text>
        </View>
        <View style={Style.blueSubContainer}>
          <TouchableOpacity>
            <TextInput
              placeholder={String.landmark}
              placeholderTextColor={Colors.White}
              editable={false}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Search
              name={Icon_Name.search_icon}
              color={Colors.White}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </BlueWrapper>
      <WhiteWrapper>
        <View style={Style.whiteWrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={Style.scrollViewContainer}>
            <View style={Style.subWhiteContainer}>
              <TouchableOpacity
                style={Style.currentLocationContainer}
                onPress={MapNavigateHandle}>
                <View style={Style.currentSubHandler}>
                  <View style={Style.IconContainer}>
                    <Icon2
                      name={Icon_Name.gps}
                      size={21}
                      color={Colors.SkyBlue}
                    />
                  </View>
                  <View>
                    <Text style={Style.currentLocationText}>
                      {String.current_location}
                    </Text>
                    <Text style={{color: Colors.lightGreyArrow}}>
                      {String.using_gps}
                    </Text>
                  </View>
                </View>
                <View>
                  <Icon3
                    name={Icon_Name.right_arrow}
                    color={Colors.SkyBlue}
                    size={28}
                  />
                </View>
              </TouchableOpacity>
              <View style={Style.locationContainer}>
                <Text style={Style.nearByText}>{String.nearBy}</Text>
                {NearbyLocationList &&
                  NearbyLocationList.map((item, index) => {
                    return (
                      <>
                        <NearbyLocationCard
                          head={item.name}
                          text={item.value}
                        />
                        {index != NearbyLocationList.length - 1 && (
                          <View style={Style.hrLine} />
                        )}
                      </>
                    );
                  })}
              </View>
              <View style={Style.gap} />
              <View style={Style.locationContainer}>
                <Text style={Style.nearByText}>{String.recentText}</Text>
                {NearbyLocationList &&
                  NearbyLocationList.map((item, index) => {
                    return (
                      <>
                        <NearbyLocationCard
                          head={item.name}
                          text={item.value}
                        />
                        {index != NearbyLocationList.length - 1 && (
                          <View style={Style.hrLine} />
                        )}
                      </>
                    );
                  })}
              </View>
            </View>
          </ScrollView>
        </View>
      </WhiteWrapper>
    </View>
  );
};

export default SearchLocation;

const Style = StyleSheet.create({
  main: {flex: 1},
  mainContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? height * 0.01 : height * 0.04,
  },
  select_location: {
    width: '100%',
    marginLeft: height * 0.09,
    color: Colors.White,
    fontFamily: FontType.SemiBold,
    fontSize: 21,
  },
  blueSubContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    padding: Platform.OS === 'ios' ? 12 : 0,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
    marginTop: Platform.OS == 'ios' ? height * 0.04 : height * 0.05,
  },
  whiteWrapper: {flex: 1, alignItems: 'center'},
  scrollViewContainer: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: height * 0.01,
    paddingBottom: height * 0.05,
  },
  subWhiteContainer: {
    width: '90%',
    height: '100%',
  },
  currentLocationContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: height * 0.02,
    borderRadius: 10,
    backgroundColor: Colors.White,
    marginVertical: height * 0.025,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 3,
    alignItems: 'center',
  },
  currentSubHandler: {flexDirection: 'row'},
  IconContainer: {
    width: height * 0.04,
    height: height * 0.04,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
  currentLocationText: {
    color: Colors.SkyBlue,
    fontFamily: FontType.Medium,
  },
  locationContainer: {
    borderRadius: 10,
    backgroundColor: Colors.White,
    padding: height * 0.024,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  nearByText: {fontFamily: FontType.Medium, fontSize: 16},
  hrLine: {
    borderWidth: 0.3,
    borderColor: Colors.lightGreyArrow,
    marginTop: height * 0.009,
  },
  gap: {
    marginTop: height * 0.024,
  },
});
