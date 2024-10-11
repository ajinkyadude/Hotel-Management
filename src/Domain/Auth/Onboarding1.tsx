import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import OnboardingOne from '../../../src/Assets/OnboardingOne.png';
import OnboardingOne2 from '../../../src/Assets/OnboardingOne_2.png';
import Arrow from 'react-native-vector-icons/AntDesign';

interface CustomOnboarding1Props {
  nextHandle: (data: number) => void;
  navigation: any;
}
const {width, height} = Dimensions.get('screen');
const Onboarding1 = ({nextHandle, navigation}: CustomOnboarding1Props) => {
  const skipHandle = () => {
    navigation.navigate('NumberScreen');
  };
  return (
    <View
      style={[Styles.mainContainer, Platform.OS == 'ios' && {marginTop: 50}]}>
      <Image source={OnboardingOne} style={Styles.onBoardingImageContainer} />
      <View style={Styles.skipContainer}>
        <TouchableOpacity onPress={skipHandle}>
          <Text style={Styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.onBoardingTwoContainer}>
        <Image
          source={OnboardingOne2}
          style={Styles.onBoardingTwoImage}
          resizeMode="contain"
        />
        <TouchableOpacity style={Styles.blueWrapperContainer}>
          <View style={Styles.blueWrapperSubContainer}>
            <Text style={Styles.headText}>Buy A Wait</Text>
            <Text style={Styles.subText1}>
              Lorem ipsum dolor sit amet consectetur adipiscing elitsed
            </Text>
            <Text style={Styles.subText1}>do eiusmod tempor incididunt</Text>
            <TouchableOpacity
              onPress={() => { 
                console.log('presed')
                nextHandle(1)}}
              style={Styles.touchContainer}>
              <Arrow name="arrowright" color="#01C0E3" size={38} />
            </TouchableOpacity>
            <View style={Styles.threeDotContainer}>
              <View style={Styles.firstDot} />
              <View style={Styles.secondDot} />
              <View style={Styles.thirdDot} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding1;

const Styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#FEFEFE', alignItems: 'center', flex: 1},
  onBoardingImageContainer: {width: 100, height: 80, marginTop: 40},
  skipContainer: {position: 'absolute', right: 0, top: 0, padding: 20},
  skipText: {color: 'black'},
  touchContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: -50,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  onBoardingTwoContainer: {
    flex: 1,
    marginTop: 70,
    alignItems: 'center'
  },
  onBoardingTwoImage: {width: width * 5, height: width * 0.5},
  blueWrapperContainer: {
    bottom: 0,
    height: 250,
    width: '100%',
    backgroundColor: '#01C0E3',
    // backgroundColor: 'black',
    position: 'absolute',
    marginBottom: 0,
    borderTopLeftRadius: 100,
    zIndex: 10
  },
  blueWrapperSubContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  headText: {fontWeight: 'bold', color: 'white', fontSize: 24},
  subText1: {color: 'white', fontSize: 13},
  threeDotContainer: {flexDirection: 'row', position: 'absolute', bottom: 30},
  firstDot: {
    height: 10,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  secondDot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  thirdDot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
