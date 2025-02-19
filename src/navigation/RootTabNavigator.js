import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import BasketStackNavigator from "./BasketStackNavigator";
import FavoriteStackNavigator from "./FavoriteStackNavigator";
import SearchStackNavigator from "./SearchStackNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" animated backgroundColor="#fafafa" />
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
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "rgb(0, 110, 255)",
          tabBarInactiveTintColor: "gray",
          // Hiding tab navigator header to show only stack header
          headerShown: false,
        })}
      >
        <Tab.Screen name="Accueil" component={HomeStackNavigator} />
        <Tab.Screen name="Recherche" component={SearchStackNavigator} />
        <Tab.Screen name="Favoris" component={FavoriteStackNavigator} />
        <Tab.Screen name="Panier" component={BasketStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootTabNavigator;
