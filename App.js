import { useFonts } from "@expo-google-fonts/inter";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Text from "./src/components/text/text";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screen/home";

const Stack = createNativeStackNavigator();

export default function App() {
  //Use google font with expo package
  let [loadedFonts] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Cookie-Regular": require("./assets/fonts/Cookie-Regular.ttf"),
  });

  if (!loadedFonts) {
    return <View>Loading...</View>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
