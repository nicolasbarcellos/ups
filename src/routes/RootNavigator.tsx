import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import { Order } from "../types/order";

export type RootStackParamsList = {
  Home: undefined;
  Modal: { userId: string; name: string };
  Order: { order: Order };
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={TabNavigator}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;
