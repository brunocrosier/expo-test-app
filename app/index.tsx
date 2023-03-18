import { useFocusEffect } from "expo-router";
import { Text, View } from "react-native";

export default function () {
  useFocusEffect(() => {
    alert("focus");
  });

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text>Hello World</Text>
    </View>
  );
}
