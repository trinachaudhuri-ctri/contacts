import React from "react";
import { SafeAreaView } from "react-native";
import AllContacts from "./src/view/AllContacts";
import CreateContact from "./src/view/CreateContact";

const App = () => {
  return (
    <SafeAreaView>
      <AllContacts />
    </SafeAreaView>
  );
};

export default App;
