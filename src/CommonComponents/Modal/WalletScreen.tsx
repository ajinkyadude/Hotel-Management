import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ImagePath} from '../../ImageConstant';
import CustomButton from '../../Domain/Auth/CommonComponents/CustomButton';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import {Colors, Icon_Name, String} from '../../Constants/Constant';

const {height, width} = Dimensions.get('screen');

const WalletScreen = () => {
  return (
    <View style={Style.subContainer}>
      <View style={Style.headContainer}>
        <Text style={Style.headingStyle}>{String.balanceText}</Text>
        <View style={Style.headPartTwo}>
          <View style={Style.walletContainer}>
            <Image source={ImagePath.Wallet2} style={Style.imageStyle} />
            <Text style={Style.priceStyle}>{String.balanceAmount}</Text>
          </View>
          <View style={Style.withdrawButtonContainer}>
            <CustomButton
              label={String.withdrawText}
              onClick={() => {}}
              style={Style.withdrawButtonStyle}
            />
          </View>
        </View>
        <View style={Style.submitButtonContainer}>
          <CustomButton label={String.Add_Amount} onClick={() => {}} />
        </View>
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

export default WalletScreen;

const Style = StyleSheet.create({
  subContainer: {
    backgroundColor: Colors.lightGrey,
    height: Platform.OS == 'ios' ? '31%' : '34%',
    borderRadius: 15,
  },
  headContainer: {
    backgroundColor: Colors.White,
    flex: 1,
    marginLeft: width * 0.04,
    marginRight: width * 0.04,
    marginTop: width * 0.04,
    borderRadius: 10,
    flexDirection: 'column',
  },
  headingStyle: {padding: width * 0.03, fontWeight: 'bold', fontSize: 16},
  headPartTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
  },
  walletContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: width * 0.02,
  },
  imageStyle: {width: width * 0.15, height: width * 0.15},
  priceStyle: {
    paddingLeft: width * 0.03,
    fontWeight: 'bold',
    fontSize: 18,
  },
  withdrawButtonContainer: {width: '50%', alignItems: 'flex-end'},
  withdrawButtonStyle: {width: '70%'},
  submitButtonContainer: {paddingTop: 20, marginHorizontal: width * 0.05},
  upArrowStyle: {alignItems: 'center'},
});
