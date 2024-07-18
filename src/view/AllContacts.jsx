import React, { useEffect, useState } from "react";
import {
    Dimensions,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import CreateContactModal from "../features/CreateContactModal";
import Header from "../features/Header";
import useGetContacts from "../hooks/useGetContacts";

const AllContacts = () => {
  const { contacts, getContacts } = useGetContacts();
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  useEffect(() => {
    getContacts();
  }, [contacts]);

  const toggleModal = () => {
    setModalVisible(!modalVisible); // Toggle modal visibility
  };

  return (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Header title={"Contacts"} />
        <Pressable onPress={toggleModal}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>+</Text>
        </Pressable>
      </View>
      <ScrollView>
        {contacts.reverse().map((contact) => (
          <View style={{ paddingBottom: 5 }}>
            <Text
              key={contact.id}
              style={{ fontWeight: "500", marginVertical: 10 }}
            >
              {contact.name}
            </Text>
            <Text key={contact.number} style={{ fontWeight: "500" }}>
              {contact.number}
            </Text>
            <View
              style={{
                height: 1,
                width: Dimensions.get("screen"),
                backgroundColor: "black",
                opacity: 0.2,
              }}
            />
          </View>
        ))}
      </ScrollView>
      <CreateContactModal
        toggleModal={toggleModal}
        modalVisible={modalVisible}
      />
    </View>
  );
};

export default AllContacts;
const styles = StyleSheet.create({
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: 10,
  },
  addButton: {
    fontWeight: "bold",
    fontSize: 25,
  },
  contactContainer: {
    paddingBottom: 5,
  },
  contactName: {
    fontWeight: "500",
    marginVertical: 10,
  },
  contactNumber: {
    fontWeight: "500",
  },
  divider: {
    height: 1,
    width: Dimensions.get("screen").width,
    backgroundColor: "black",
    opacity: 0.2,
    marginVertical: 5,
  },
});
