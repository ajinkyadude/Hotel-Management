import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BlueWrapper from './CommonComponents/BlueWrapper';
import OtpLogo from '../../../src/Assets/OtpLogo.png';
import WhiteWrapper from './CommonComponents/WhiteWrapper';
import {NumberArray} from './Utils/DataObjects';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomDropdown from './CommonComponents/DropdownCustom';
import {useState} from 'react';
import Call from 'react-native-vector-icons/Ionicons';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from './CommonComponents/CustomButton';

const {width, height} = Dimensions.get('screen');
const NumberScreen = ({navigation}: any) => {
  const [dataModal, setDataModal] = useState(false);
  const [Value, selectedValue] = useState(NumberArray[0]);
  const [check, SetCheck] = useState(false);

  const showDataModal = () => {
    setDataModal(true);
  };
  const closeShowModal = () => {
    setDataModal(false);
  };
  const OnChange = (val: number) => {
    selectedValue(val);
  };
  const ClickHandle = () => {
    navigation.navigate('OtpScreen');
  };
  return (
    <View style={Styles.mainContainer}>
      <BlueWrapper>
        <View style={Styles.ImageWrapper}>
          <Image
            source={OtpLogo}
            style={Styles.ImageStyle}
            resizeMode="contain"
          />
        </View>
      </BlueWrapper>
      <WhiteWrapper>
        <View style={Styles.subWrapper}>
          <Text style={Styles.welcomeText}>Welcome!</Text>
          <View>
            <Text style={Styles.subText}>
              Please enter your phone number where you can receive a text.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={showDataModal}
              style={Styles.initialNumber}>
              <TextInput
                value={`+${Value} v`}
                style={{fontSize: 15}}
                editable={false}
              />
            </TouchableOpacity>
            <View style={Styles.actualNumber}>
              <TextInput
                style={{fontSize: 15}}
                // editable={false}
                placeholder="ex. 9307950336"
              />
              <Call name="call-outline" color={'black'} size={21} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 15,
            }}>
            {check ? (
              <TouchableOpacity onPress={() => SetCheck(false)}>
                <Check name="checkbox-marked" color={'#01C1E5'} size={20} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => SetCheck(true)}>
                <Check
                  name="checkbox-blank-outline"
                  color={'#01C1E5'}
                  size={20}
                />
              </TouchableOpacity>
            )}
            <Text style={{marginLeft: 5}}>keep me sign in</Text>
          </View>
          <View style={{marginTop: 40}}>
            <CustomButton label={'VERIFY'} onClick={ClickHandle} />
          </View>
        </View>
      </WhiteWrapper>
      <CustomDropdown
        data={NumberArray}
        isVisible={dataModal}
        cancleHandle={closeShowModal}
        ItemSelected={OnChange}
      />
    </View>
  );
};

export default NumberScreen;

const Styles = StyleSheet.create({
  mainContainer: {flex: 1},
  ImageWrapper: {flex: 1, alignItems: 'center'},
  ImageStyle: {width: 100, height: 100, marginTop: 70},
  subWrapper: {marginTop: 30, marginHorizontal: 20},
  welcomeText: {
    color: '#01C1E5',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 15,
  },
  subText: {color: '#8A8DA0'},
  initialNumber: {
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 80,
    borderRadius: 30,
    elevation: 4,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  actualNumber: {
    backgroundColor: '#FFFFFF',
    height: height * 0.06,
    width: height * 0.3,
    borderRadius: 30,
    elevation: 4,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    paddingHorizontal: height * 0.025,
  },
});
