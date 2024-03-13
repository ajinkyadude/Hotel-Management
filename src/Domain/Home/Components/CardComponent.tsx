import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ImagePath} from '../../../ImageConstant';
const {height, width} = Dimensions.get('screen');

interface CardComponentProp {
  Title: String;
  subText: String;
  buttonText: String;
  imgaeName: any;
}

const CardComponent = ({
  Title,
  subText,
  buttonText,
  imgaeName,
}: CardComponentProp) => {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.subContainer}>
        <View style={Styles.alignView}>
          <Image source={imgaeName} style={Styles.ImageView} />
          <View style={Styles.subTextView}>
            <Text style={Styles.headTextView}>{Title}</Text>
            <Text style={Styles.SubHeadText}>{subText}</Text>
            <TouchableOpacity style={Styles.buttinView}>
              <Text style={Styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardComponent;

const Styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
  },
  subContainer: {
    backgroundColor: '#FFFFFF',
    height: height * 0.18,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {height: 5, width: 5},
    shadowRadius: 10,
    borderRadius: 15,
    marginTop: 20,
    shadowOpacity: 0.5,
    padding: height * 0.015,
  },
  alignView: {
    flexDirection: 'row',
  },
  ImageView: {
    height: height * 0.14,
    width: height * 0.14,
  },
  subTextView: {
    width: '60%',
    marginLeft: height * 0.02,
  },
  headTextView: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  SubHeadText: {
    flexShrink: 1,
    color: '#8A8DA0',
    marginVertical: 4
  },
  buttinView: {
    backgroundColor: '#E6F9FD',
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 7,
  },
  buttonText: {
    color: '#01BFE2',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
