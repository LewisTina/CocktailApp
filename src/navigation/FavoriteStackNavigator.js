import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";
import { screenOptions } from "../theme/styles";

// Screen stack for settings tab
const FavoriteStack = createNativeStackNavigator();

const FavoriteStackNavigator = () => {
  return (
    <FavoriteStack.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <FavoriteStack.Screen name="Settings" component={SettingsScreen} />
    </FavoriteStack.Navigator>
  );
};

export default FavoriteStackNavigator;
