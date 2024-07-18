import React from 'react'
import {View,Text,StyleSheet,Modal,Pressable} from 'react-native'
import CreateContact from '../view/CreateContact'

const CreateContactModal=({toggleModal,modalVisible})=>{
    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CreateContact onClose={toggleModal} />
            <Pressable onPress={toggleModal}>
              <Text>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
}
export default CreateContactModal
const styles=StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      modalView: {
        width: "100%",
        height: "90%",
        backgroundColor: "white",
        borderRadius: 0,
        paddingTop: 50,
        paddingHorizontal: 20,
      },
})
