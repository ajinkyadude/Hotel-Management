import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BlueWrapper from '../../Domain/Auth/CommonComponents/BlueWrapper';
import WhiteWrapper from '../../Domain/Auth/CommonComponents/WhiteWrapper';
import Back from 'react-native-vector-icons/Ionicons';
import {Colors, Icon_Name} from '../../Constants/Constant';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

const CardDetailsScreen = () => {
  const navigation = useNavigation();
  const backHandle = () => {
    navigation.goBack();
  };

  return (
    <View style={Style.main}>
      <BlueWrapper>
        <View>
          {/* <View style={Style.mainContainer}> */}
          <TouchableOpacity onPress={backHandle}>
            <Back name={Icon_Name.back} size={21} color={Colors.White} />
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </BlueWrapper>
      <WhiteWrapper height="80%">
        <View></View>
      </WhiteWrapper>
    </View>
  );
};

export default CardDetailsScreen;

const Style = StyleSheet.create({
  main: {flex: 1},
  mainContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? height * 0.01 : height * 0.04,
  },
});
