import {View} from 'react-native';
import CustomStatusBar from '../../../CommonComponents/StatusBar/CustomStatusBar';
import { Colors } from '../../../Constants/Constant';
interface CustomBlueWrapper {
  children: JSX.Element;
}

const BlueWrapper = ({children}: CustomBlueWrapper) => {
  return (
    <View style={{backgroundColor: Colors.drakSkyBlue, flex: 1}}>
      <CustomStatusBar />
      {children}
    </View>
  );
};

export default BlueWrapper;
