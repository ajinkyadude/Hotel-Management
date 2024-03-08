import { View } from "react-native";

interface CustomBlueWrapper {
    children: JSX.Element
}

const BlueWrapper = ({children}: CustomBlueWrapper) => {
  return (
  <View style={{backgroundColor: '#01C0E3', flex: 1}}>
    {children}
  </View>
  );
};

export default BlueWrapper;
