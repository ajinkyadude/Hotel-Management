import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  Dimensions,
  Image,
  Modal,
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
import {Colors} from '../../../Constants/Constant';
import CustomButton from '../../Auth/CommonComponents/CustomButton';
import CardComponent from '../../Home/Components/CardComponent';
import HotelCard from '../../Home/Components/HotelCard';
import Calendar from 'react-native-vector-icons/Ionicons';
import {Array} from '../Constant';
import {useState} from 'react';
import MapView from 'react-native-maps';
import ModalScreen from '../../../CommonComponents/Modal/Modal';
import WalletScreen from '../../../CommonComponents/Modal/WalletScreen';

interface RootStackParamList {
  HomeScreen: undefined; // Optional: If Home screen doesn't need params
  // Other screens in your root stack (if any)
}
interface HomeProps extends BottomTabNavigationProp<any, 'HomeScreen'> {
  // Other props specific to your Home screen
}
const {height, width} = Dimensions.get('screen');
const Waits = ({navigation}: any) => {
  const ClickHandle = () => {};
  const [selected, setSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const modalHandler = () => {
    setModalVisible(true);
  };

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
            <TouchableOpacity onPress={modalHandler}>
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
        <View
          style={{
            marginTop: Platform.OS === 'ios' ? 15 : 30,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '70%',
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
            <TouchableOpacity>
              <Search name="search1" color={'#FFFFFF'} size={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Calendar name="calendar-outline" color={'#FFFFFF'} size={28} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Search name="filter" color={'#FFFFFF'} size={28} />
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </BlueWrapper>
      <WhiteWrapper>
        <ScrollView style={{width: '100%', marginBottom: 10, borderRadius: 20}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
                marginTop: 20,
              }}>
              <CustomButton
                iconName={'format-list-bulleted'}
                label={'LIST'}
                onClick={() => {
                  setSelected(false);
                }}
                style={{
                  backgroundColor: selected ? Colors.White : Colors.SkyBlue,
                  width: '45%',
                }}
                textStyle={selected ? Colors.SkyBlue : Colors?.White}
              />
              <CustomButton
                iconName={'map-marker-outline'}
                label={'MAP'}
                onClick={() => {
                  setSelected(true);
                }}
                style={{
                  backgroundColor: selected ? Colors.SkyBlue : Colors.White,
                  width: '45%',
                }}
                textStyle={selected ? Colors?.White : Colors.SkyBlue}
              />
            </View>
            {/* <MapView
              style={{width: 100, height: 100}}
              //specify our coordinates.
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            /> */}
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
      {/* <Modal visible={true} animationType="fade" transparent>
        <View
          style={{
            backgroundColor: '#101828CC',
            height: '90%',
            marginTop: '30%',
            borderRadius: 15,
          }}>
          <View
            style={{
              backgroundColor: '#F4F5F7',
              height: '30%',
              borderRadius: 15,
            }}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                flex: 1,
                marginLeft: 15,
                marginRight: 15,
                marginTop: 15,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'column'}}>
                <View>
                  <Text style={{padding: 10, fontWeight: 'bold', fontSize: 16}}>
                    Your Balance
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}>
                  <View
                    style={{
                      width: '50%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 10,
                    }}>
                    <Image
                      source={ImagePath.Wallet2}
                      style={{width: 50, height: 50}}
                    />
                    <Text
                      style={{
                        paddingLeft: 10,
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>{`$3,486.00`}</Text>
                  </View>
                  <View style={{width: '50%', alignItems: 'flex-end'}}>
                    <CustomButton
                      label={'WITHDRAW'}
                      onClick={() => {}}
                      style={{width: '70%'}}
                    />
                  </View>
                </View>
                <View style={{paddingTop: 20, marginHorizontal: 20}}>
                  <CustomButton label={'Add Amount'} onClick={() => {}} />
                </View>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Arrow name="keyboard-arrow-up" size={33} color={'#8A8DA0'} />
            </View>
          </View>
        </View>
      </Modal> */}
      <ModalScreen visible={modalVisible}>
        <WalletScreen />
      </ModalScreen>
    </View>
  );
};

export default Waits;

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
