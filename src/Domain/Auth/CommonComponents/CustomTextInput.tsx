import {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const {height, width} = Dimensions.get('screen');

interface CustomTextInputProps {
  onChange: (data: number[]) => void;
}

const CustomTextInput = ({onChange}: CustomTextInputProps) => {
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixth = useRef(null);

  const [Index, setIndex] = useState(0);
  const [array, setArray] = useState([]);

  const changeHandle = (val: string, index: number) => {
    // console.log("val +  "+JSON.stringify(val));

    if (val) {
      setArray(prev => [...prev, val]);
      onChangeIndex(index + 1);
    } else  if (index > 0 && !array[index]){
      onChangeIndex(index - 1);
      let array2 = array;
      let ne = array2.splice(index, 1);
      setArray(array2);
    }
  };

  const onChangeIndex = (newIndex: number) => {
    if (newIndex >= 0 && newIndex <= 5) {
      setIndex(newIndex);
    }
  };

  console.log('Array   ***  ' + array);

  // useEffect(() => {
  //   if (Index == 0) {
  //     firstInput.current.focus();
  //   }
  //   if (Index == 1) {
  //     secondInput.current.focus();
  //   }
  //   if (Index == 2) {
  //     thirdInput.current.focus();
  //   }
  //   if (Index == 3) {
  //     fourthInput.current.focus();
  //   }
  //   if (Index == 4) {
  //     fifthInput.current.focus();
  //   }
  //   if (Index == 5) {
  //     sixth.current.focus();
  //   }
  // }, [Index]);
  useEffect(() => {
    const inputs = [
      firstInput,
      secondInput,
      thirdInput,
      fourthInput,
      fifthInput,
      sixth,
    ];
    if (Index >= 0 && Index < inputs.length) {
      inputs[Index].current?.focus();
    }
  }, [Index]);

  useEffect(() => {
    if (array.length === 6) {
      onChange(array);
    }
  }, [array]);

  return (
    <KeyboardAvoidingView
      enabled
      // behavior="padding"
      // keyboardVerticalOffset={100}
      // style={Styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      // behavior='position'
      //   keyboardVerticalOffset={
      //     Platform.OS === 'ios' ? height * 0.35 : 0
      //   }
      style={{flexDirection: 'row', flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
          }}>
          <TextInput
            maxLength={1}
            style={Styles.textInputStyle}
            // autoFocus={Index == 0 ? true : false}
            onChangeText={(text: any) => {
              console.log(' first call' + text);

              changeHandle(text, 0);
            }}
            ref={firstInput}
            onKeyPress={({nativeEvent}) => {
              if (
                nativeEvent.key === 'Backspace' &&
                Index > 0 &&
                !array[Index]
              ) {
                setIndex(Index - 1);
              }
            }}
          />
          <TextInput
            maxLength={1}
            style={Styles.textInputStyle}
            autoFocus={Index == 1 ? true : false}
            onChangeText={(text: any) => {
              console.log(' second call');
              changeHandle(text, 1);
            }}
            ref={secondInput}
            onKeyPress={({nativeEvent}) => {
              if (
                nativeEvent.key === 'Backspace' &&
                Index > 0 &&
                !array[Index]
              ) {
                setIndex(Index - 1);
              }
            }}
          />
          <TextInput
            maxLength={1}
            style={Styles.textInputStyle}
            autoFocus={Index == 2 ? true : false}
            onChangeText={(text: any) => {
              console.log(' Third call');
              changeHandle(text, 2);
            }}
            ref={thirdInput}
            onKeyPress={({nativeEvent}) => {
              if (
                nativeEvent.key === 'Backspace' &&
                Index > 0 &&
                !array[Index]
              ) {
                setIndex(Index - 1);
              }
            }}
          />
          <TextInput
            maxLength={1}
            style={Styles.textInputStyle}
            autoFocus={Index == 3 ? true : false}
            onChangeText={(text: any) => {
              console.log(' fourth call');
              changeHandle(text, 3);
            }}
            ref={fourthInput}
            onKeyPress={({nativeEvent}) => {
              if (
                nativeEvent.key === 'Backspace' &&
                Index > 0 &&
                !array[Index]
              ) {
                setIndex(Index - 1);
              }
            }}
          />
          <TextInput
            maxLength={1}
            style={Styles.textInputStyle}
            autoFocus={Index == 4 ? true : false}
            onChangeText={(text: any) => {
              console.log(' fifth call');
              changeHandle(text, 4);
            }}
            ref={fifthInput}
            onKeyPress={({nativeEvent}) => {
              if (
                nativeEvent.key === 'Backspace' &&
                Index > 0 &&
                !array[Index]
              ) {
                setIndex(Index - 1);
              }
            }}
          />
          <TextInput
            maxLength={1}
            style={Styles.textInputStyle}
            autoFocus={Index == 5 ? true : false}
            onChangeText={(text: any) => {
              console.log(' sixth call');
              changeHandle(text, 5);
            }}
            ref={sixth}
            onKeyPress={({nativeEvent}) => {
              if (
                nativeEvent.key === 'Backspace' &&
                Index > 0 &&
                !array[Index]
              ) {
                setIndex(Index - 1);
              }
            }}
            // onFocus={}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default CustomTextInput;

const Styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    width: height * 0.06,
    height: height * 0.06,
    borderRadius: 10,
    borderColor: '#01C1E5',
    textAlign: 'center',
    fontSize: 17,
    // shadowColor: 'black',
    // shadowOpacity: 0.5,
    // shadowOffset: {height: 5,width: 5}
  },
});
