// packages/frontend/src/components/CreateContact.jsx
import React, { useState } from "react";
import { StyleSheet, View, Modal ,Text,Pressable} from "react-native";
import Button from "../features/Button";
import TextInputCustom from "../features/TextInput";
import useCreateContact from "../hooks/useCreateContact";

const CreateContact = ({onClose}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { createContact } = useCreateContact();
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  function createContackHandler() {
    createContact({ name, number });
    setName("")
    setNumber("")
    setModalVisible(true)
    onClose()
  }

  return (
    <View style={styles.container}>
      <TextInputCustom placeholder="Name" value={name} onChangeText={setName} />
      <TextInputCustom
        placeholder="Number"
        value={number}
        onChangeText={setNumber}
        keyboardType="phone-pad"
      />
      <Button title="Create Contact" cb={createContackHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default CreateContact;
