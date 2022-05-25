import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: spacing[8],
    color: colors.indigo,
  },
});
