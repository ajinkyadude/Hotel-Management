import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BlueWrapper from '../../Auth/CommonComponents/BlueWrapper';
import Wallet from 'react-native-vector-icons/Ionicons';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import otjtr from '../../../Assets/OtpLogo.png';
import {ImagePath} from '../../../ImageConstant';
import Star from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../Constants/Constant';
import WhiteWrapper from '../../Auth/CommonComponents/WhiteWrapper';
import {ProfileArray} from '../Constants';
import Arrow from 'react-native-vector-icons/MaterialIcons';
interface ProfileAray {
  name: String;
  Image: ImageSourcePropType;
}
interface ItemObj {
  Title: String;
  SubItem: ProfileAray[];
}
interface ProfileScrollScreen {
  item: ItemObj;
  index: Number;
}
const {height, width} = Dimensions.get('screen');

const ProfileScreen = () => {
  const ProfileScrollScreen = ({item, index}: ProfileScrollScreen) => {
    return (
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            paddingHorizontal: height * 0.02,
            fontSize: 18,
          }}>
          {item?.Title}
        </Text>
        {item?.SubItem &&
          item?.SubItem.map((item, index) => {
            return (
              <TouchableOpacity
                style={[
                  item?.name != 'My QR Code' && Styles.lineStyle,
                  Styles.ProfileView,
                ]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={item?.Image}
                    style={{height: 30, width: 30}}
                    resizeMode="contain"
                  />
                  <Text style={{marginLeft: 20}}>{item?.name}</Text>
                </View>
                <Arrow
                  name={'keyboard-arrow-right'}
                  size={21}
                  color={Colors.SkyBlue}
                />
              </TouchableOpacity>
            );
          })}
      </View>
    );
  };

  const {height, width} = Dimensions.get('screen');
  return (
    <View style={Styles.mainContainer}>
      <BlueWrapper>
        <View style={Styles.ImageWrapper}>
          <Image
            source={otjtr}
            style={Styles.ImageStyle}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Click me to get location
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity>
              <Wallet
                name="wallet-outline"
                color="#FFFFFF"
                size={28}
                style={{marginRight: 20}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Bell name="bell-outline" color="#FFFFFF" size={28} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.profileContainer}>
          <View style={Styles.profileSubContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={ImagePath.Profile} style={Styles.profileStyle} />
              <Text
                style={{
                  color: Colors.White,
                  fontWeight: 'bold',
                  fontSize: 21,
                  marginLeft: height * 0.015,
                }}>
                Steve Jordan
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Star name="star" color={Colors.yellow} size={28} />
              <Text
                style={{
                  color: Colors.White,
                  fontSize: 21,
                  marginLeft: height * 0.01,
                }}>
                4.7
              </Text>
            </View>
          </View>
        </View>
      </BlueWrapper>
      <WhiteWrapper>
        <ScrollView nestedScrollEnabled={true}>
          <View
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <View
              style={{
                width: '90%',
                backgroundColor: Colors.White,
                height: '100%',
              }}>
              <FlatList
                data={ProfileArray}
                contentContainerStyle={{marginTop: 20}}
                renderItem={ProfileScrollScreen}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </ScrollView>
      </WhiteWrapper>
    </View>
  );
};

export default ProfileScreen;

const Styles = StyleSheet.create({
  ImageStyle: {width: 50, height: 50},
  ImageWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: Platform.OS == 'android' ? height * 0.03 : 0,
  },
  mainContainer: {flex: 1},
  profileStyle: {
    width: 55,
    height: 55,
  },
  profileContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? height * 0.01 : height * 0.025,
  },
  profileSubContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ProfileView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: height * 0.021,
  },
  lineStyle: {
    borderBottomWidth: 1,
    borderColor: Colors.lightGrey,
  },
});
