import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "../components/text/text";

export default function Home() {
  return (
    <View>
      <Text preset="h1" style={styles.textHeader}> This is home screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textHeader: {
    marginTop: 30,
  },
});
