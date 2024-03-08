import {Image, View} from 'react-native';
import Splash from '../../../src/Assets/Splash.png';
import { useEffect } from 'react';

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('OnBoarding1')
        },2000);
    },[])
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#01C0E3',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={Splash} style={{width: 300, height: 300}} />
    </View>
  );
};

export default SplashScreen;
