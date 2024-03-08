import {Text, TouchableOpacity} from 'react-native';

interface CustomButtonProps {
    label: String,
    onClick: () => void,
}

const CustomButton = ({label, onClick}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => onClick()}
      style={{
        width: '100%',
        backgroundColor: '#01C0E3',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 25,
      }}>
      <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
