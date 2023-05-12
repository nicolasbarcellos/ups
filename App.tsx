import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/routes/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
