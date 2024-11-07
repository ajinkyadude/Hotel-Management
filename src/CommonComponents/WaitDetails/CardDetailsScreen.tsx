import {
  Dimensions,
  Image,
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
import {String} from '../../Constants/String';
import {ImagePath} from '../../ImageConstant';

const {height, width} = Dimensions.get('screen');

const CardDetailsScreen = (props: any) => {
  const navigation = useNavigation();
  const backHandle = () => {
    navigation.goBack();
  };

  const item = props?.route?.params?.item;

  console.log(' item  ', item);

  return (
    <View style={Style.main}>
      <BlueWrapper>
        <View style={Style.mainContainer}>
          <TouchableOpacity onPress={backHandle} style={Style.backStyle}>
            <Back name={Icon_Name.back} size={21} color={Colors.White} />
          </TouchableOpacity>
          <View style={Style.headerStyle}>
            <Text style={Style.headerText}>{String.Dinner_in_The_Sky}</Text>
          </View>
        </View>
      </BlueWrapper>
      <WhiteWrapper height={Platform.OS == 'ios' ? '83%' : '85%'}>
        <View
          style={{width: '100%', backgroundColor: 'red', alignItems: 'center'}}>
          <View style={{borderRadius: 8}}>
            <Image source={item?.ImageName} style={{width: 350, height: 100}} />
            <Text>{item?.Title}</Text>
          </View>
        </View>
      </WhiteWrapper>
    </View>
  );
};

export default CardDetailsScreen;

const Style = StyleSheet.create({
  main: {flex: 1},
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? height * 0.04 : height * 0.07,
  },
  backStyle: {
    marginLeft: height * 0.03,
    alignItems: 'center',
    zIndex: 10,
  },
  headerStyle: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
  },
  headerText: {color: Colors.White, fontWeight: 'bold', fontSize: 21},
});
