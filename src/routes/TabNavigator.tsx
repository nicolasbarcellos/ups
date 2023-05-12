import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OrderScreens from "../screens/OrderScreens";
import { Icon } from "@rneui/themed";
import CustomerScreen from "../screens/CustomerScreen/CustomerScreen";

export type TabParamsList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabParamsList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59c1cc",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, focused, size }) => {
          if (route.name === "Customers") {
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? "#59c1cc" : "gray"}
              />
            );
          } else if (route.name === "Orders") {
            return (
              <Icon
                name="box"
                type="entypo"
                color={focused ? "#eb6a7c" : "gray"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Customers"
        component={CustomerScreen}
      />
      <Tab.Screen name="Orders" component={OrderScreens} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
