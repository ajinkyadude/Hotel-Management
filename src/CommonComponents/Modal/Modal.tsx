import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Colors} from '../../Constants/Constant';

interface ModalScreenProp {
  children: JSX.Element;
  visible: boolean;
  halfModal: boolean;
  closeModal: () => void;
}

const ModalScreen = ({
  children,
  visible = false,
  halfModal = false,
  closeModal,
}: ModalScreenProp) => {
  return (
    <>
      <Modal visible={visible} animationType="fade" transparent>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View
            style={[Style.mainContainer, {marginTop: halfModal ? '30%' : 0}]}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default ModalScreen;

const Style = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.modalBackColor,
    height: '100%',
    borderRadius: 15,
  },
});
