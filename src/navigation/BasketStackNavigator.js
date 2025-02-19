import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";
import { screenOptions } from "../theme/styles";

// Screen stack for settings tab
const BasketStack = createNativeStackNavigator();

const BasketStackNavigator = () => {
  return (
    <BasketStack.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <BasketStack.Screen name="Settings" component={SettingsScreen} />
    </BasketStack.Navigator>
  );
};

export default BasketStackNavigator;
