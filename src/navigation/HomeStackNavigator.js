import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { screenOptions } from "../theme/styles";

// Screen stack for home tab
const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ ...screenOptions, title: "Accueil",  }}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} 
        options={{
          headerTransparent: true,
          headerTitleStyle: { color: 'transparent' },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerShadowVisible: false,
        }}/>
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
