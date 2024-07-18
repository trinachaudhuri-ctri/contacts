import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import useCreateContact from "../hooks/useCreateContact";

const Button = ({ title,cb }) => {
 
  return (
    <Pressable style={styles.button} onPress={cb}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "skyblue",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
