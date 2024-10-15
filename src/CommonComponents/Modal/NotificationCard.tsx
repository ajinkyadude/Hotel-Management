import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {FontType} from '../../Constants/FontType';

const {height, width} = Dimensions.get('screen');

interface NotificationCardProps {
  imageName: string;
  imageText: string;
  imageDate: string;
}

const NotificationCard = ({item}: NotificationCardProps) => {
  return (
    <View style={Style.container}>
      <Image source={item?.imageName} style={Style.imageStyle} />
      <View style={Style.imageTextContainer}>
        <Text style={Style.imageText}>{item?.imageText}</Text>
        <Text style={Style.imageDate}>{item?.imageDate}</Text>
      </View>
    </View>
  );
};

export default NotificationCard;

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: height * 0.017,
  },
  imageStyle: {height: height * 0.1, width: height * 0.1},
  imageTextContainer: {width: '70%', marginLeft: height * 0.02},
  imageText: {fontFamily: FontType.Regular, fontSize: 15},
  imageDate: {fontFamily: FontType.Light, marginTop: height * 0.004},
});
