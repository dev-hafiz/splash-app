import { View, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Text from "./text/text";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";

export default function BottomContents() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} />
      <Text preset="h1" style={{ textAlign: "center" }}>
        None-Contact Deliveries
      </Text>
      <Text style={styles.paraText}>
        When palcing an order, select the option "Contactless delivery" and
        their courier will leave your order at the door
      </Text>

      <Pressable style={styles.pressableBtn}>
        <Text preset="h4" style={{ textAlign: "center" }}>
          ORDER NOW
        </Text>
      </Pressable>
      <Pressable style={styles.dimmisBtn}>
        <Text preset="h4" style={{ textAlign: "center", color: "#A259FF" }}>
          DISMISS
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: spacing[5],
  },
  paraText: {
    textAlign: "center",
    marginVertical: spacing[3],
  },
  pressableBtn: {
    backgroundColor: colors.green,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[6],
    width: "100%",
    borderRadius: 10,
    marginTop: spacing[5],
  },
  dimmisBtn: {
    backgroundColor: colors.white,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[6],
    width: "100%",
    borderRadius: 10,
    marginTop: spacing[5],
  },
});
