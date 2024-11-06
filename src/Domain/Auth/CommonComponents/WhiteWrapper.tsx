import {View} from 'react-native';

interface CustomWhiteWrapper {
  children: JSX.Element;
  height?: string;
}

const WhiteWrapper = ({children, height}: CustomWhiteWrapper) => {
  return (
    <View
      style={{
        backgroundColor: '#F4F5F7',
        // backgroundColor: 'red',
        height: height ? height : '75%',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderRadius: 20
      }}>
      <View
        style={{
          // backgroundColor: '#FFFFFF',
          // backgroundColor: 'red',
          backgroundColor: '#F4F5F7',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width: 'auto',
          height: '100%',
        }}>
        {children}
      </View>
    </View>
  );
};

export default WhiteWrapper;
