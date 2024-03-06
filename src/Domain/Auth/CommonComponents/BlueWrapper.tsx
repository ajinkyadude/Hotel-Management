import { View } from "react-native";

const BlueWrapper = ({children}: any) => {
  return (
  <View style={{backgroundColor: '#01C0E3', flex: 1}}>
    {children}
  </View>
  );
};

export default BlueWrapper;
