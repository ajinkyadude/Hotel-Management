import {View} from 'react-native';

const WhiteWrapper = ({children}: any) => {
  return (
    <View
      style={{
        backgroundColor: '#01C0E3',
        height: '75%',
      }}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 20,
          width: '100%',
          height: '100%',
        }}>
        {children}
      </View>
    </View>
  );
};

export default WhiteWrapper;
