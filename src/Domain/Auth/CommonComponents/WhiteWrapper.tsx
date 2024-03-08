import {View} from 'react-native';

interface CustomWhiteWrapper {
  children: JSX.Element;
}

const WhiteWrapper = ({children}: CustomWhiteWrapper) => {
  return (
    <View
      style={{
        backgroundColor: '#01C0E3',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        width: '100%'
      }}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width: '100%',
          height: '100%',
        }}>
        {children}
      </View>
    </View>
  );
};

export default WhiteWrapper;
