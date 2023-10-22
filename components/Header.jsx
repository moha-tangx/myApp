import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export function Header({ tittle }) {
  return (
    <View style={styles.header}>
      <StatusBar style="dark" />
      <Text style={styles.text}>{tittle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ddd",
    fontSize: 30,
    fontSize: 30,
    letterSpacing: 2,
    fontWeight: "700",
  },
});
