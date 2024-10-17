import {Text, View} from 'react-native';
import {FontType} from '../../../Constants/FontType';
import Map from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../Constants/Constant';

interface NearbyLocationCardProp {
  head: string;
  text: string;
}

const NearbyLocationCard = ({head, text}: NearbyLocationCardProp) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
      }}>
      <Map name="map-marker-outline" size={28} color={Colors.SkyBlue} />
      <View style={{padding: 10}}>
        <Text style={{fontFamily: FontType.Medium}}>{head}</Text>
        <Text style={{fontFamily: FontType.Regular, paddingTop: 3}}>
          {text}
        </Text>
      </View>
    </View>
  );
};

export default NearbyLocationCard;
