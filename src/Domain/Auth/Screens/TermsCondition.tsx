import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';
import {ImagePath} from '../../../ImageConstant';
import BlueWrapper from '../CommonComponents/BlueWrapper';
import WhiteWrapper from '../CommonComponents/WhiteWrapper';
import {Colors} from '../../../Constants/Constant';

const {height} = Dimensions.get('screen');

const TermsCondition = ({navigation}: any) => {
  const [check, SetCheck] = useState(false);
  return (
    <View style={Styles.mainContainer}>
      <BlueWrapper>
        <View style={Styles.ImageWrapper}>
          <Image
            source={ImagePath.OtpLogo}
            style={Styles.ImageStyle}
            resizeMode="contain"
          />
        </View>
      </BlueWrapper>

      <WhiteWrapper>
        <ScrollView>
          <View style={Styles.subWrapper}>
            <Text style={Styles.welcomeText}>Terms & conditions</Text>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              The standard Lorem Ipsum passage
            </Text>
            <Text style={{marginVertical: 20, color: '#8A8DA0', fontSize: 16}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 20}}>
              Finibus “Bonorum et Malorum"
            </Text>
            <Text style={{color: '#8A8DA0'}}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,
              }}>
              {check ? (
                <TouchableOpacity onPress={() => SetCheck(false)}>
                  <Check name="checkbox-marked" color={'#01C1E5'} size={20} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    SetCheck(true);
                    setTimeout(() => {
                      navigation.navigate('BottonNavigation');
                    }, 2000);
                  }}>
                  <Check
                    name="checkbox-blank-outline"
                    color={'#01C1E5'}
                    size={20}
                  />
                </TouchableOpacity>
              )}
              <Text style={{marginLeft: 5}}>
                I agree to tearms & conditions.
              </Text>
            </View>
          </View>
        </ScrollView>
      </WhiteWrapper>
    </View>
  );
};

export default TermsCondition;

const Styles = StyleSheet.create({
  ImageWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  ImageStyle: {
    width: 100,
    height: 100,
    marginTop: Platform.OS == 'ios' ? height * 0.02 : height * 0.04,
  },
  mainContainer: {flex: 1},
  subWrapper: {marginTop: 30, marginHorizontal: 20},
  welcomeText: {
    color: Colors.lightSkyBlue,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 15,
  },
  subText: {color: Colors.lightGreyArrow},
});
