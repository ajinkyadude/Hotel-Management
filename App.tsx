import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from './src/Domain/Auth/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding1 from './src/Domain/Auth/Onboarding1';
import OnboardingCarousel from './src/Domain/Auth/OnboardingCarousel';
import NumberScreen from './src/Domain/Auth/NumberScreen';

const App = () => {
  // const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
      </Tab.Navigator> */}
      <Stack.Navigator>
        {/* <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} /> */}
        <Stack.Screen
          name="NumberScreen"
          component={NumberScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoarding1"
          component={OnboardingCarousel}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
