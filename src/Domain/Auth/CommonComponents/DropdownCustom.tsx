import {
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface CustomDropdownProps {
    data: number[],
    isVisible: boolean,
    cancleHandle: () => void,
    ItemSelected: (data: number) => void,
}

interface renderProps {
    item: number,
}

const CustomDropdown = ({data, isVisible, cancleHandle, ItemSelected}: CustomDropdownProps) => {
  const renderComponent = (item: renderProps) => {
    return (
      <TouchableOpacity
        onPress={() => {
          ItemSelected(item.item);
          cancleHandle()
        }}
        style={{width: '100%', padding: 10, marginVertical: 4, marginLeft: 8}}>
        <Text style={{color: '#8A8DA0', fontSize: 16}}>{item.item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <TouchableWithoutFeedback onPress={() => cancleHandle()}>
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            flex: 1,
            width: '100%',
            zIndex: -1,
          }}>
          <TouchableWithoutFeedback>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                height: '70%',
                width: '100%',
                position: 'absolute',
                bottom: 0,
                borderWidth: 1,
                borderColor: 'transparent',
                borderRadius: 20,
                padding: 20,
                zIndex: 10,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#8A8DA0',
                    fontWeight: 'bold',
                    fontSize: 24,
                    marginBottom: 10,
                  }}>
                  Select Option
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    cancleHandle();
                  }}>
                  <Text style={{fontSize: 17, color: 'skyblue'}}>Cancle</Text>
                </TouchableOpacity>
              </View>

              <FlatList data={data} renderItem={renderComponent} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomDropdown;
