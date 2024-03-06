import {
  Dimensions,
  FlatList,
  Image,
  Modal,
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

const NumberScreen = () => {
  const {width, height} = Dimensions.get('screen');
  const [dataModal, setDataModal] = useState(false);
  const [Value, selectedValue] = useState(NumberArray[0]);
  const [check,SetCheck]=useState(false)

  const showDataModal = () => {
    setDataModal(true);
  };
  const closeShowModal = () => {
    setDataModal(false);
  };
  const OnChange = (val: number) => {
    selectedValue(val);
  };
  return (
    <View style={{flex: 1}}>
      <BlueWrapper>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={OtpLogo}
            style={{width: 100, height: 100, marginTop: 70}}
            resizeMode="contain"
          />
        </View>
      </BlueWrapper>
      <WhiteWrapper>
        <View style={{marginTop: 30, marginHorizontal: 20}}>
          <Text
            style={{
              color: '#01C1E5',
              fontWeight: 'bold',
              fontSize: 24,
              marginBottom: 15,
            }}>
            Welcome!
          </Text>
          <View>
            <Text style={{color: '#8A8DA0'}}>
              Please enter your phone number where you can receive a text.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={showDataModal}
              style={{
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
              }}>
              <TextInput
                value={`+${Value} v`}
                style={{fontSize: 15}}
                editable={false}
              />
            </TouchableOpacity>
            <View
              style={{
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
              }}>
              <TextInput
                style={{fontSize: 15}}
                // editable={false}
                placeholder="ex. 9307950336"
              />
              <Call name="call-outline" color={'black'} size={21} />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
              <Check name='checkbox-marked' color={"#01C1E5"}/>
              <Check name='checkbox-blank-outline' color={"#01C1E5"}/>
              <Text>keep me sign in</Text>
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
