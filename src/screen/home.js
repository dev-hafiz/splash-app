import { View, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import SplashHeader from "../components/text/splash-header";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "../components/bottom-sheet";

export default function Home() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.indigo }}>
      <View style={styles.root}>
        <StatusBar style="light" />
        <SplashHeader />
        <BottomSheet />
      </View>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  root: {},
  textHeader: {
    marginTop: 30,
  },
});
