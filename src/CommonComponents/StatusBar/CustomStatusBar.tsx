import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../Constants/Constant';

const CustomStatusBar = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{backgroundColor: Colors.SkyBlue, height: insets.top}}>
      <StatusBar backgroundColor={Colors.SkyBlue} barStyle="light-content" />
    </View>
  );
};

export default CustomStatusBar;
