import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import SplashHeader from "../components/text/splash-header";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <SafeAreaView style={styles.root}>
    <StatusBar/>
      <SplashHeader />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.indigo,
  },
  textHeader: {
    marginTop: 30,
  },
});
