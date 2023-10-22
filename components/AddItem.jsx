import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddItem({ addItem }) {
  const [text, setText] = useState("");
  function onChange(string) {
    setText(string);
  }
  return (
    <View>
      <TextInput
        placeholder="Add Item"
        style={styles.input}
        onChangeText={onChange}
      ></TextInput>
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.addIcon}>+</Text>
        <Text style={styles.btnTxt}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 4,
    borderRadius: 10,
    width: 300,
    padding: 5,
    paddingHorizontal: 30,
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#11f",
    gap: 20,
    marginTop: 20,
    borderRadius: 30,
  },
  btnTxt: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "800",
  },
  addIcon: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "900",
  },
});
