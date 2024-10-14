import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import { Colors } from '../../Constants/Constant';

const ModalScreen = ({children, visible}: any) => {
  return (
    <>
      <Modal visible={visible} animationType="fade" transparent>
        <View style={Style.mainContainer}>{children}</View>
      </Modal>
    </>
  );
};

export default ModalScreen;

const Style = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.modalBackColor,
    height: '90%',
    marginTop: '30%',
    borderRadius: 15,
  },
});
