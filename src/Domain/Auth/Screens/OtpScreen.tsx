import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BlueWrapper from '../CommonComponents/BlueWrapper';
import WhiteWrapper from '../CommonComponents/WhiteWrapper';
import OTPTextInput from 'react-native-otp-textinput';
import {Colors} from '../../../Constants/Constant';
import {String} from '../../../Constants/String';
import {ImagePath} from '../../../ImageConstant';

const {height, width} = Dimensions.get('screen');

const OtpScreen = ({navigation}: any) => {
  const otpSubmit = (val: string) => {
    navigation.navigate('TermsCondition');
  };
  const codeHandle = (val: string) => {
    if (val.length == 6) {
      otpSubmit(val);
    }
  };
  return (
    <View style={Styles.mainContainer}>
      <BlueWrapper>
        <View style={Styles.ImageWrapper}>
          <Image
            source={ImagePath.OtpLogo}
            style={Styles.ImageStyle}
            resizeMode="contain"
          />
        </View>
      </BlueWrapper>

      <WhiteWrapper>
        <ScrollView>
          <View style={Styles.subWrapper}>
            <Text style={Styles.welcomeText}>{String.digital_access}</Text>
            <View>
              <Text style={Styles.subText}>{String.digital_access_code}</Text>
            </View>

            <View style={Styles.otpTextBoxWrapper}>
              <OTPTextInput
                inputCount={6}
                handleTextChange={codeHandle}
                textInputStyle={Styles.underlineStyleBase}
                tintColor={Colors.lightSkyBlue}
              />
            </View>
          </View>
        </ScrollView>
      </WhiteWrapper>
    </View>
  );
};

export default OtpScreen;

const Styles = StyleSheet.create({
  ImageWrapper: {flex: 1, alignItems: 'center'},
  ImageStyle: {
    width: width * 0.24,
    height: height * 0.12,
    marginTop: height * 0.02,
  },
  mainContainer: {flex: 1},
  subWrapper: {marginTop: height * 0.04, marginHorizontal: width * 0.04},
  welcomeText: {
    color: Colors.lightSkyBlue,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: height * 0.03,
  },
  subText: {color: Colors.lightGreyArrow},
  underlineStyleBase: {
    borderWidth: 1,
    borderColor: Colors.lightSkyBlue,
    width: height * 0.06,
    height: height * 0.06,
    borderRadius: 10,
    color: Colors.black,
  },
  otpTextBoxWrapper: {marginTop: height * 0.04},
});
