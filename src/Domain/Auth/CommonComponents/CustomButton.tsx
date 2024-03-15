import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CustomButtonProps {
  label: String;
  onClick: () => void;
  style?: any;
  iconName?: String;
  textStyle?: any;
}

const CustomButton = ({
  label,
  onClick,
  style,
  iconName,
  textStyle,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => onClick()}
      style={[
        {
          width: '100%',
          backgroundColor: '#01C0E3',
          alignItems: 'center',
          paddingVertical: 15,
          borderRadius: 25,
        },
        style,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {iconName && (
          <Icon
            name={iconName}
            color={textStyle ? textStyle : '#FFFFFF'}
            size={28}
            style={{marginRight: 10}}
          />
        )}
        <Text
          style={[
            {color: textStyle ? textStyle : '#FFFFFF', fontWeight: 'bold'},
          ]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
