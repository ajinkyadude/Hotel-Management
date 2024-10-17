import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BlueWrapper from '../../Auth/CommonComponents/BlueWrapper';
import WhiteWrapper from '../../Auth/CommonComponents/WhiteWrapper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Icon_Name} from '../../../Constants/Constant';
import {FontType} from '../../../Constants/FontType';
import {String} from '../../../Constants/String';
import Search from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Entypo';

const {height, width} = Dimensions.get('screen');

const SearchLocation = ({navigation}: any) => {
  const backHandle = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1}}>
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
              placeholder="search for area, landmark..."
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
        <View style={{flex: 1, alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              height: '100%',
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
                borderRadius: 10,
                backgroundColor: Colors.White,
                marginVertical: 20,
                shadowColor: 'black',
                shadowRadius: 8,
                shadowOffset: 10,
                shadowOpacity: 0.1,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: height * 0.04,
                    height: height * 0.04,
                    // backgroundColor: 'red',
                    borderRadius: 20,
                    //   backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: 'black',
                    shadowRadius: 8,
                    // shadowOffset: 10,
                    shadowOpacity: 0.1,
                  }}>
                  <Icon2 name="gps-fixed" size={21} color={Colors.SkyBlue} />
                </View>
                <View>
                  <Text
                    style={{
                      color: Colors.SkyBlue,
                      fontFamily: FontType.Medium,
                    }}>
                    Current location
                  </Text>
                  <Text style={{color: Colors.lightGreyArrow}}>Using GPS</Text>
                </View>
              </View>
              <View>
                <Icon3
                  name="chevron-small-right"
                  color={Colors.SkyBlue}
                  size={28}
                />
              </View>
            </View>
          </View>
        </View>
      </WhiteWrapper>
    </View>
  );
};

export default SearchLocation;

const Style = StyleSheet.create({
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
});
