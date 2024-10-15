import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from './src/Domain/Auth/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding1 from './src/Domain/Auth/Onboarding1';
import OnboardingCarousel from './src/Domain/Auth/OnboardingCarousel';
import NumberScreen from './src/Domain/Auth/NumberScreen';
import OtpScreen from './src/Domain/Auth/OtpScreen';
import TermsCondition from './src/Domain/Auth/TermsCondition';
import BottonNavigation from './src/Domain/Home/Screens/BottomNavigation';

const App = () => {
  // const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottonNavigation"
          component={BottonNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="BottonNavigation"
          component={BottonNavigation}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="OnBoarding1"
          component={OnboardingCarousel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NumberScreen"
          component={NumberScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TermsCondition"
          component={TermsCondition}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="BottonNavigation"
          component={BottonNavigation}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
