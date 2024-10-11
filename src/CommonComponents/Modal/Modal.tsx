import {Image, Modal, Text, View} from 'react-native';

const ModalScreen = ({children}: any) => {
  return (
    <>
      <Modal visible={true} animationType="fade" transparent>
        {children}
      </Modal>
    </>
  );
};

export default ModalScreen;
