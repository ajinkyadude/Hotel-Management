import {Text, TouchableOpacity} from 'react-native';

interface CustomButtonProps {
  label: String;
  onClick: () => void;
  style?: any;
}

const CustomButton = ({label, onClick, style}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => onClick()}
      style={[{
        width: '100%',
        backgroundColor: '#01C0E3',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 25,
      },style]}>
      <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
