import {Image, View} from 'react-native';
import Splash from '../../../src/Assets/Splash.png';
import {useEffect} from 'react';
import {ImagePath} from '../../../ImageConstant';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('OnBoarding1')
      navigation.reset({
        index: 0,
        routes: [{name: 'OnBoarding1'}],
      });
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#01C0E3',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={ImagePath.Splash} style={{width: 300, height: 300}} />
    </View>
  );
};

export default SplashScreen;
