import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/listStyle";

export default function List({ item, deleteItem }) {
  return (
    <TouchableOpacity style={styles.tile}>
      <View>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <View>
        <Text style={styles.remove} onPress={() => deleteItem(item.id)}>
          X
        </Text>
      </View>
    </TouchableOpacity>
  );
}
