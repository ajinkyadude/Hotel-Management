import {View} from 'react-native';

interface CustomWhiteWrapper {
  children: JSX.Element;
}

const WhiteWrapper = ({children}: CustomWhiteWrapper) => {
  return (
    <View
      style={{
        backgroundColor: '#F4F5F7',
        // backgroundColor: 'red',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        width: '100%'
      }}>
      <View
        style={{
          // backgroundColor: '#FFFFFF',
          // backgroundColor: 'red',
          backgroundColor: '#F4F5F7',
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
