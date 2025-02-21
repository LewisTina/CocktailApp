import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import CartScreen from "../screens/CartScreen";

const Tab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Icons will be different if the tab is focused
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Accueil") {
            iconName = focused
              ? "wine"
              : "wine-outline";
          } else if (route.name === "Recherche") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Favoris") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Panier") {
            iconName = focused ? "cart" : "cart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "rgb(0, 110, 255)",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Recherche" component={SearchScreen} />
      <Tab.Screen name="Favoris" component={FavoriteScreen} />
      <Tab.Screen name="Panier" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default RootTabNavigator;
