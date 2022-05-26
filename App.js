import { useFonts } from "@expo-google-fonts/inter";
import Text from "./src/components/text/text";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screen/home";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  //Use google font with expo package
  let [loadedFonts] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Cookie-Regular": require("./assets/fonts/Cookie-Regular.ttf"),
  });

  // if (!loadedFonts) {
  //   return <Text>Loading...</Text>;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
