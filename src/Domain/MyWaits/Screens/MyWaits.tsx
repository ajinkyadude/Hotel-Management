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
import WhiteWrapper from '../../Auth/CommonComponents/WhiteWrapper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Wallet from 'react-native-vector-icons/Ionicons';
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from 'react-native-vector-icons/AntDesign';
import {Array, Colors, Icon_Name} from '../../../Constants/Constant';
import CustomButton from '../../Auth/CommonComponents/CustomButton';
import HotelCard from '../../Home/Components/HotelCard';
import Calendar from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import MapView from 'react-native-maps';
import ModalScreen from '../../../CommonComponents/Modal/Modal';
import WalletScreen from '../../../CommonComponents/Modal/WalletScreen';
import NotificationScreen from '../../../CommonComponents/Modal/NotificationScreen';
import {String} from '../../../Constants/String';
import {ImagePath} from '../../../ImageConstant';

const {height} = Dimensions.get('screen');
const MyWaits = ({navigation}: any) => {
  const ClickHandle = () => {};
  const [selected, setSelected] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [notModal, setNotModal] = useState<boolean>(false);
  const walletModalHandler = () => {
    setModalVisible(true);
  };
  const notificationModalHandle = () => {
    setNotModal(true);
  };
  const closeWalletModal = () => {
    setModalVisible(false);
  };
  const closeNotModal = () => {
    setNotModal(false);
  };

  const searchHandle = () => {
    navigation.navigate('searchResto');
  };

  return (
    <View style={Styles.mainContainer}>
      <BlueWrapper>
        {/* <View> */}
        <View style={Styles.ImageWrapper}>
          <Image
            source={ImagePath.OtpLogo}
            style={Styles.ImageStyle}
            resizeMode="contain"
          />
          <TouchableOpacity style={Styles.searchContainer}>
            <Text style={Styles.locationText}>{String.location_text}</Text>
          </TouchableOpacity>
          <View style={Styles.walletContainer}>
            <TouchableOpacity onPress={walletModalHandler}>
              <Wallet
                name={Icon_Name.wallet}
                color={Colors.White}
                size={28}
                style={Styles.walletIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={notificationModalHandle}>
              <Bell name={Icon_Name.bell} color={Colors.White} size={28} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.searchCafeContainer}>
          <View style={Styles.searchCafeSubContainer}>
            <TextInput
              placeholder="search for ’cafe’"
              placeholderTextColor={Colors.White}
              editable={false}
            />
            <TouchableOpacity onPress={searchHandle}>
              <Search
                name={Icon_Name.search_icon}
                color={Colors.White}
                size={20}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Calendar
              name={Icon_Name.calendar}
              color={Colors.White}
              size={28}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Search name={Icon_Name.filter} color={Colors.White} size={28} />
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </BlueWrapper>
      <WhiteWrapper>
        <ScrollView style={Styles.scrollviewStyle}>
          <View style={Styles.scrollviewSubContainer}>
            <View style={Styles.buttonContainer}>
              <CustomButton
                // iconName={Icon_Name.list}
                label={String.sale}
                onClick={() => {
                  setSelected(false);
                }}
                style={[
                  Styles.listButton,
                  {backgroundColor: selected ? Colors.White : Colors.SkyBlue},
                ]}
                textStyle={selected ? Colors.SkyBlue : Colors?.White}
              />
              <CustomButton
                // iconName={Icon_Name.map}
                label={String.purchase}
                onClick={() => {
                  setSelected(true);
                }}
                style={[
                  {
                    backgroundColor: selected ? Colors.SkyBlue : Colors.White,
                  },
                  Styles.listButton,
                ]}
                textStyle={selected ? Colors?.White : Colors.SkyBlue}
              />
              <CustomButton
                // iconName={Icon_Name.map}
                label={String.request}
                onClick={() => {
                  setSelected(true);
                }}
                style={[
                  {
                    backgroundColor: selected ? Colors.SkyBlue : Colors.White,
                  },
                  Styles.listButton,
                ]}
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
      <ModalScreen
        visible={modalVisible}
        halfModal={true}
        closeModal={closeWalletModal}>
        <WalletScreen />
      </ModalScreen>
      <ModalScreen
        visible={notModal}
        halfModal={true}
        closeModal={closeNotModal}>
        <NotificationScreen />
      </ModalScreen>
    </View>
  );
};

export default MyWaits;

const Styles = StyleSheet.create({
  ImageStyle: {
    width: height * 0.065,
    height: height * 0.065,
    // marginTop: Platform.OS === 'ios' ? height * 0.08 : height * 0.04,
  },
  ImageWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: Platform.OS == 'android' ? height * 0.03 : 0,
  },
  mainContainer: {flex: 1},
  gradient: {
    flex: 1,
    borderRadius: 50,
  },
  searchContainer: {
    // marginTsop: Platform.OS == 'ios' ? height * 0.1 : height * 0.06,
  },
  locationText: {color: 'white', fontWeight: 'bold'},
  walletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: Platform.OS === 'ios' ? height * 0.095 : height * 0.05,
  },
  walletIcon: {marginRight: height * 0.02},
  searchCafeContainer: {
    marginTop: Platform.OS === 'ios' ? 15 : 30,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  searchCafeSubContainer: {
    flexDirection: 'row',
    width: '70%',
    padding: Platform.OS === 'ios' ? 12 : 0,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: height * 0.02,
  },
  scrollviewStyle: {
    width: '100%',
    marginBottom: height * 0.01,
    borderRadius: 20,
  },
  scrollviewSubContainer: {width: '100%', alignItems: 'center'},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: height * 0.02,
  },
  listButton: {
    width: '30%',
  },
});
