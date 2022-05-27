import { View, StyleSheet, Dimensions } from "react-native";
import React, { useCallback, useEffect, useImperativeHandle } from "react";
import Text from "./text/text";
import { colors } from "../theme/colors";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import BottomContents from "./bottom-contents";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function BottomSheet() {
  const translateY = useSharedValue(0);
  const MAX_TRANSLAT_Y = -SCREEN_HEIGHT + 50;

  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLAT_Y);
    });

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 1.5, { damping: 50 });
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <View style={styles.line} />
        <BottomContents />
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
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: colors.indigo,
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 4,
  },
});
