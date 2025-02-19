import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOptions } from "../theme/styles";
import CartScreen from "../screens/CartScreen";

// Screen stack for settings tab
const BasketStack = createNativeStackNavigator();

const BasketStackNavigator = () => {
  return (
    <BasketStack.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
    >
      <BasketStack.Screen name="Panier" component={CartScreen} />
    </BasketStack.Navigator>
  );
};

export default BasketStackNavigator;
