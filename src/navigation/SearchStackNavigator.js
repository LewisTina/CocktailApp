import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";
import { screenOptions } from "../theme/styles";

// Screen stack for settings tab
const SearchStack = createNativeStackNavigator();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <SearchStack.Screen name="Settings" component={SettingsScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;
