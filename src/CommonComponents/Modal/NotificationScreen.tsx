import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors, Icon_Name, NotificationArray} from '../../Constants/Constant';
import {FontType} from '../../Constants/FontType';
import {String} from '../../Constants/String';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import NotificationCard from './NotificationCard';

const {height, width} = Dimensions.get('screen');

const NotificationScreen = () => {
  return (
    <View style={Style.subContainer}>
      <View style={Style.headTextContainer}>
        <Text style={Style.notificationText}>{String.notification}</Text>
        <Text style={Style.seeAllText}>{String.See_All}</Text>
      </View>
      <View style={Style.headContainer}>
        {NotificationArray &&
          NotificationArray.length > 0 &&
          NotificationArray.map((item, index) => {
            return <NotificationCard item={item} />;
          })}
      </View>
      <View style={Style.upArrowStyle}>
        <Arrow
          name={Icon_Name.upArraw}
          size={33}
          color={Colors.lightGreyArrow}
        />
      </View>
    </View>
  );
};

export default NotificationScreen;

const Style = StyleSheet.create({
  subContainer: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 15,
  },
  notificationText: {
    fontFamily: FontType.SemiBold,
    margin: height * 0.015,
    fontSize: 16,
  },
  headContainer: {
    backgroundColor: Colors.White,
    marginLeft: width * 0.04,
    marginRight: width * 0.04,
    marginTop: width * 0.04,
    borderRadius: 10,
    flexDirection: 'column',
  },
  upArrowStyle: {alignItems: 'center'},
  headTextContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  seeAllText: {padding: height * 0.018, color: Colors.SkyBlue},
});
