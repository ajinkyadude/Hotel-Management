import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OnboardingOne from '../../../src/Assets/OnboardingOne.png';
import OnboardingOne2 from '../../../src/Assets/OnboardingTwo.png';
import Arrow from 'react-native-vector-icons/AntDesign';

interface CustomOnboarding2Props {
  nextHandle: (data: number) => void;
  navigation: any;
}

const Onboarding2 = ({nextHandle, navigation}: CustomOnboarding2Props) => {
  const {width, height} = Dimensions.get('screen');
  const nextNavigate = () => {
    navigation.navigate('NumberScreen')
  }

  return (
    <View
      style={[
        {backgroundColor: '#FEFEFE', alignItems: 'center', flex: 1},
        Platform.OS == 'ios' && {marginTop: 50},
      ]}>
      <Image
        source={OnboardingOne}
        style={{width: 100, height: 80, marginTop: 40}}
      />
      <View style={{position: 'absolute', right: 0, top: 0, padding: 20}}>
        <TouchableOpacity onPress={nextNavigate}>
          <Text style={{color: 'black'}}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          //   height: '100%',
          //   width: '100%',
          flex: 1,
          marginTop: 70,
          alignItems: 'center',
        }}>
        <Image
          source={OnboardingOne2}
          style={{width: width * 5, height: width * 0.5}}
          resizeMode="contain"
        />
        <View
          style={{
            bottom: 0,
            height: 250,
            width: '100%',
            backgroundColor: '#01C0E3',
            position: 'absolute',
            marginBottom: 0,
            borderTopLeftRadius: 100,
            // marginTop:
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 24}}>
              Sell A Wait
            </Text>
            <Text style={{color: 'white', fontSize: 13}}>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip
            </Text>
            <Text style={{color: 'white', fontSize: 13}}>ex ea commodo</Text>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: 'white',
                borderRadius: 50,
                position: 'absolute',
                top: -50,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={nextNavigate}>
                <Arrow name="arrowright" color="#01C0E3" size={38} />
              </TouchableOpacity>
            </View>
            <View
              style={{flexDirection: 'row', position: 'absolute', bottom: 30}}>
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 10,
                  backgroundColor: 'white',
                }}
              />
              <View
                style={{
                  height: 10,
                  width: 30,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  marginHorizontal: 5,
                }}
              />
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 10,
                  backgroundColor: 'white',
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding2;
