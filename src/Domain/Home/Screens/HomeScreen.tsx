import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import BlueWrapper from '../../Auth/CommonComponents/BlueWrapper';
// import OtpLogo from '../../../src/Assets/OtpLogo.png';
import otjtr from '../../../Assets/OtpLogo.png';
import WhiteWrapper from '../../Auth/CommonComponents/WhiteWrapper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Wallet from 'react-native-vector-icons/Ionicons';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from 'react-native-vector-icons/AntDesign';
import {ImagePath} from '../../../ImageConstant';
import CardComponent from '../Components/CardComponent';
import {Colors} from '../../../Constants/Constant';
import CustomButton from '../../Auth/CommonComponents/CustomButton';
import HotelCard from '../Components/HotelCard';

interface RootStackParamList {
  HomeScreen: undefined; // Optional: If Home screen doesn't need params
  // Other screens in your root stack (if any)
}
interface HomeProps extends BottomTabNavigationProp<any, 'HomeScreen'> {
  // Other props specific to your Home screen
}
const {height, width} = Dimensions.get('screen');
const HomeScreen = ({navigation}: any) => {
  const ClickHandle = () => {};

  const Array = [
    {
      Title: 'Dinner in The Sky',
      subText: '4814 Bingamon Road Warrensville Heights, OH 44128',
      ImageName: ImagePath.WaitsScreen1,
    },
    {
      Title: 'Dinner in The Bath',
      subText: 'chimanpura peth, satara',
      ImageName: ImagePath.Girl,
    },
    {
      Title: 'The Fun Station',
      subText: '4814 Bingamon Road Warrensville Heights, OH 44128',
      ImageName: ImagePath.Golf,
    },
    {
      Title: 'The Disaster Cafe',
      subText: '4814 Bingamon Road Warrensville Heights, OH 44128',
      ImageName: ImagePath.Chair,
    },
    {
      Title: 'Del Posto',
      subText: '4814 Bingamon Road Warrensville Heights, OH 44128',
      ImageName: ImagePath.Lest,
    },
    {
      Title: 'Comedy knockout',
      subText: '4814 Bingamon Road Warrensville Heights, OH 44128',
      ImageName: ImagePath.Song,
    },
    {
      Title: 'Parallax Restaurant',
      subText: '4814 Bingamon Road Warrensville Heights, OH 44128',
      ImageName: ImagePath.Veg,
    },
  ];

  return (
    <View style={Styles.mainContainer}>
      <BlueWrapper>
        {/* <View> */}
        <View style={Styles.ImageWrapper}>
          <Image
            source={otjtr}
            style={[
              Styles.ImageStyle,
              Platform.OS === 'ios'
                ? {marginTop: height * 0.08}
                : {marginTop: height * 0.04},
            ]}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={
              Platform.OS == 'ios'
                ? {marginTop: height * 0.1}
                : {marginTop: height * 0.06}
            }>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Click me to get location
            </Text>
          </TouchableOpacity>
          <View
            style={[
              {flexDirection: 'row', justifyContent: 'space-around'},
              Platform.OS === 'ios'
                ? {marginTop: height * 0.095}
                : {marginTop: height * 0.05},
            ]}>
            <Wallet
              name="wallet-outline"
              color="#FFFFFF"
              size={28}
              style={{marginRight: 20}}
            />
            <Bell name="bell-outline" color="#FFFFFF" size={28} />
          </View>
        </View>
        <View
          style={{
            marginTop: Platform.OS === 'ios' ? 15 : 30,
            alignItems: 'center'
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              padding: Platform.OS === 'ios' ? 12 : 0,
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <TextInput
              placeholder="search for ’cafe’"
              placeholderTextColor={'#FFFFFF'}
            />
            <Search name="search1" color={'#FFFFFF'} size={20} />
          </View>
        </View>
        {/* </View> */}
      </BlueWrapper>
      <WhiteWrapper>
        <ScrollView style={{width: '100%', marginBottom: 10}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <CardComponent
              Title={'Sell Your reserved Wait!'}
              subText={'You have the option of selling, your reserved wait.'}
              buttonText={'Sell your Wait'}
              imgaeName={ImagePath.SellImage}
            />
            <CardComponent
              Title={'Request a New Wait!'}
              subText={'You can make a request for your wait necessities.'}
              buttonText={'Request a Wait'}
              imgaeName={ImagePath.Puchase}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                marginTop: height * 0.03,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
                Hot Waitlist Around You
              </Text>
              <TouchableOpacity>
                <Text style={{color: Colors.SkyBlue}}>SEE ALL</Text>
              </TouchableOpacity>
            </View>
            {Array &&
              Array.length > 0 &&
              Array.map(item => {
                return (
                  <HotelCard
                    Title={item?.Title}
                    subText={item?.subText}
                    ImageName={item?.ImageName}
                  />
                );
              })}
          </View>
        </ScrollView>
      </WhiteWrapper>
    </View>
  );
};

export default HomeScreen;

const Styles = StyleSheet.create({
  ImageStyle: {width: 50, height: 50},
  ImageWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  mainContainer: {flex: 1},
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  gradient: {
    flex: 1,
    borderRadius: 50,
  },
});
