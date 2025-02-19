import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/FavoriteScreen";
import { screenOptions } from "../theme/styles";

// Screen stack for settings tab
const FavoriteStack = createNativeStackNavigator();

const FavoriteStackNavigator = () => {
  return (
    <FavoriteStack.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <FavoriteStack.Screen name="Favoris" component={FavoriteScreen} />
    </FavoriteStack.Navigator>
  );
};

export default FavoriteStackNavigator;
