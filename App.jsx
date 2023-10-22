// native components import
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Header } from "./components/Header";
import { useState } from "react";

// custom components import
import List from "./components/List";
import Items from "./components/Items";
import AddItem from "./components/AddItem";

export default function App() {
  const id = () => Math.ceil(Math.random() * 99999999999);

  const [items, setItems] = useState(Items);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (item) => {
    setItems((prevItems) => {
      return [{ id: id(), name: item, price: "$300" }, ...prevItems];
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header tittle={"SHOPPING LIST"}></Header>
      <AddItem addItem={addItem}></AddItem>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => <List item={item} deleteItem={deleteItem} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#11f8",
    flex: 1,
    paddingBottom: 50,
  },
});
