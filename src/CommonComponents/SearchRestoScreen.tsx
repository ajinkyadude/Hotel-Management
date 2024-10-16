import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BlueWrapper from '../Domain/Auth/CommonComponents/BlueWrapper';
import WhiteWrapper from '../Domain/Auth/CommonComponents/WhiteWrapper';
import Search from 'react-native-vector-icons/AntDesign';
import {Colors, Icon_Name, Recent_Search} from '../Constants/Constant';
import {FontType} from '../Constants/FontType';
import {String} from '../Constants/String';
import Timmer from 'react-native-vector-icons/Ionicons';
import {StatusBar} from 'react-native';

const {height, width} = Dimensions.get('screen');
const SearchRestoScreen = () => {
  return (
    <View style={Style.container}>
      <BlueWrapper>
        <View style={Style.blueSubContainer}>
          <TouchableOpacity>
            <TextInput
              placeholder="search for ’cafe’"
              placeholderTextColor={Colors.White}
              editable={false}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Search
              name={Icon_Name.search_icon}
              color={Colors.White}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </BlueWrapper>
      <WhiteWrapper height="83%">
        <View>
          <Text style={Style.recentSearch}>{String.recent_searches}</Text>
          <View style={Style.resentSearchWrapper}>
            {Recent_Search.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={Style.search_for_cafe}>
                  <Timmer
                    name={Icon_Name.timmer}
                    size={24}
                    color={Colors.lightGreyArrow}
                  />
                  <Text style={Style.searchIcon}>{item?.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </WhiteWrapper>
    </View>
  );
};

export default SearchRestoScreen;

const Style = StyleSheet.create({
  container: {flex: 1},
  blueSubContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    padding: Platform.OS === 'ios' ? 12 : 0,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.06,
    marginTop: Platform.OS == 'ios' ? height * 0.1 : height * 0.07,
  },
  recentSearch: {
    fontFamily: FontType.Medium,
    padding: height * 0.023,
    fontSize: 16,
  },
  resentSearchWrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  search_for_cafe: {
    borderWidth: 1,
    padding: height * 0.01,
    borderRadius: 19,
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: Colors.lightGreyArrow,
  },
  searchIcon: {
    alignSelf: 'center',
    color: Colors.lightGreyArrow,
    marginHorizontal: height * 0.01,
  },
});
