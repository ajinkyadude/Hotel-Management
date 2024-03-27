import {useEffect} from 'react';
import {Platform, Text, View} from 'react-native';
// import {
//   PERMISSIONS,
//   request,
//   check,
//   RESULTS,
//   PermissionsAndroid,
// } from 'react-native-permissions';

const MyWaits = () => {
  // const requestBluetoothPermission = async () => {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
  //         {
  //           title: 'Bluetooth Permission',
  //           message: 'Our app needs access to Bluetooth to scan for devices',
  //         }
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         console.log('Bluetooth permission granted');
  //         // Your Bluetooth functionalities here
  //       } else {
  //         console.log('Bluetooth permission denied');
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   };

//   const requestBluetoothPermission = async () => {
//     // try {
//     //   const result = await request(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL);
//     //   console.log('result v****  ' + JSON.stringify(result));

//     //   if (result === 'granted') {
//     //     console.log('Bluetooth permission granted');
//     //     // Your Bluetooth functionalities here
//     //   } else {
//     //     console.log('Bluetooth permission denied');
//     //   }
//     // } catch (err) {
//     //   console.warn(err);
//     // }
//     if (Platform.OS === 'ios') {
//       check(PERMISSIONS.IOS.LOCATION_ALWAYS)
//         .then(result => {
//           switch (result) {
//             case RESULTS.UNAVAILABLE:
//               console.log(
//                 'This feature is not available (on this device / in this context)',
//               );
//               break;
//             case RESULTS.DENIED:
//               console.log(
//                 'The permission has not been requested / is denied but requestable',
//               );
//               break;
//             case RESULTS.LIMITED:
//               console.log(
//                 'The permission is limited: some actions are possible',
//               );
//               break;
//             case RESULTS.GRANTED:
//               console.log('The permission is granted');
//               break;
//             case RESULTS.BLOCKED:
//               console.log(
//                 'The permission is denied and not requestable anymore',
//               );
//               break;
//           }
//         })
//         .catch(error => {
//           // …
//         });
//     } else {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
//         {
//           title: 'Bluetooth Permission',
//           message: 'Our app needs access to Bluetooth to scan for devices',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('Bluetooth permission granted');
//         // Your Bluetooth functionalities here
//       } else {
//         console.log('Bluetooth permission denied');
//       }
//     }
//   };

//   useEffect(() => {
//     requestBluetoothPermission();
//   }, []);

  return (
    <View>
      <Text>MyWaits</Text>
    </View>
  );
};

export default MyWaits;
