import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Text from "./text/text";
import { colors } from "../theme/colors";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function BottomSheet() {
  const translateY = useSharedValue(0);

  const gesture = Gesture.Pan().onUpdate((event) => {
    translateY.value = event.translationY;

  });

  const rBottomSheetStyle = useAnimatedStyle( ()=>{
    return{
      transform:[{ translateY: translateY.value}]
    }
  
  })

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer,rBottomSheetStyle ]}>
        <View style={styles.line} />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: colors.white,
    position: "absolute",
    top: SCREEN_HEIGHT / 2.5,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: colors.purple,
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 4,
  },
});