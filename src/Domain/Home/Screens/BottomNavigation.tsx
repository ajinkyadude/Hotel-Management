import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Waits from '../../Waits/Screens/Waits';
import MyWaits from '../../MyWaits/Screens/MyWaits';
import ProfileScreen from '../../Profile/Screens/ProfileScreen';
import {ImagePath} from '../../../ImageConstant';
import {Image, Text, View} from 'react-native';
import {Colors} from '../../../Constants/Constant';
//   tabBarButton: () => CustomButton('Profile'),
import Home from 'react-native-vector-icons/MaterialCommunityIcons';

const BottonNavigation = () => {
  const Tab = createBottomTabNavigator();

  const CustomButton = (val: any) => {
    return (
      <View
        style={{
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
          width: '25%',
        }}>
        <Text>{val}</Text>
        {/* {active && <Text>Active</Text>} */}
      </View>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Waits') {
            iconName = 'table-chair';
          } else if (route.name === 'MyWaits') {
            iconName = 'food';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }

          return <Home name={iconName} size={27} color={color} />;
        },
        tabBarActiveTintColor: 'blue', // Active icon color
        tabBarInactiveTintColor: 'gray', // Inactive icon color
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          //   tabBarButton: props => CustomButton('Home'),
          tabBarActiveTintColor: Colors.SkyBlue,
          //   tabBarIcon: () => {
          //     return (
          //       //   <Image source={ImagePath.Home} style={{width: 20, height: 20}} />
          //       <Home name="home-outline" size={27} />
          //     );
          //   },
        }}
      />
      <Tab.Screen
        name="Waits"
        component={Waits}
        options={{
          headerShown: false,
          //   tabBarButton: ({navigation}: any) => CustomButton('Waits'),

          tabBarActiveTintColor: Colors.SkyBlue,
          //   tabBarIcon: () => {
          //     return (
          //       <Image source={ImagePath.Home} style={{width: 20, height: 20}} />
          //     );
          //   },
        }}
      />
      <Tab.Screen
        name="MyWaits"
        component={MyWaits}
        options={{
          headerShown: false,
          //   tabBarButton: () => CustomButton('My Waits'),
          tabBarActiveTintColor: Colors.SkyBlue,
          //   tabBarIcon: () => {
          //     return (
          //       <Image source={ImagePath.Home} style={{width: 20, height: 20}} />
          //     );
          //   },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          //   tabBarButton: () => CustomButton('Profile'),
          tabBarActiveTintColor: Colors.SkyBlue,
          //   tabBarIcon: () => {
          //     return (
          //       <Image source={ImagePath.Home} style={{width: 20, height: 20}} />
          //     );
          //   },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottonNavigation;
