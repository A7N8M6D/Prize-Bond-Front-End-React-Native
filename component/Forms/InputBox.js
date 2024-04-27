import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const InputBox = ({
  inputTitle,
  autoComplete,
  keyboardType,
  secureTextEntry,
  value,
  setValue
}) => {
  return (
    <View>
      <Text>{inputTitle}</Text>
      <TextInput
        style={styles.inputBox}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text)=>setValue(text)}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    //    fontSize:20,
    height: 40,
    backgroundColor: "white",
    // borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "black",
  },
});
export default InputBox;
