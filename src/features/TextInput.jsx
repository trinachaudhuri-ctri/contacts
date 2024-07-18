import React from "react";
import { TextInput, StyleSheet } from "react-native";

const TextInputCustom = ({placeholder,value,onChangeText,keyboardType=""}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
};

export default TextInputCustom

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
