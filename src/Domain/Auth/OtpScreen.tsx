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
import BlueWrapper from './CommonComponents/BlueWrapper';
import OtpLogo from '../../../src/Assets/OtpLogo.png';
import WhiteWrapper from './CommonComponents/WhiteWrapper';
import CustomTextInput from './CommonComponents/CustomTextInput';
import {KeyboardAvoidingView} from 'react-native';

const OtpScreen = ({navigation}: any) => {
  const {width, height} = Dimensions.get('screen');
  const otpSubmit = (val: number[]) => {
    console.log('val ***  ' + val);
    navigation.navigate('TermsCondition')
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
        <ScrollView>
          <View style={Styles.subWrapper}>
            <Text style={Styles.welcomeText}>Digit Access Code</Text>
            <View>
              <Text style={Styles.subText}>
                Digit access code sent to +96 8364 9838 93
              </Text>
            </View>

            <View style={{marginTop: 20}}>
              <CustomTextInput onChange={otpSubmit} />
            </View>
          </View>
        </ScrollView>
      </WhiteWrapper>
    </View>
    // </KeyboardAvoidingView>
  );
};

export default OtpScreen;

const Styles = StyleSheet.create({
  ImageWrapper: {flex: 1, alignItems: 'center'},
  ImageStyle: {width: 100, height: 100, marginTop: 70},
  mainContainer: {flex: 1},
  subWrapper: {marginTop: 30, marginHorizontal: 20},
  welcomeText: {
    color: '#01C1E5',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 15,
  },
  subText: {color: '#8A8DA0'},
});
