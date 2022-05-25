import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "./text";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

export default function SplashHeader() {
  return (
    <View style={styles.container}>
      <Text
        preset="logo"
        style={{
          textAlign: "center",
        }}
      >
        D
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 63,
    height: 63,
    backgroundColor: colors.paleGreen,
    borderRadius: 100,
    marginTop: 70,
    marginHorizontal: spacing[6],
  },
});
