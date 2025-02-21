import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from "../theme/styles";

const Drawer = createDrawerNavigator();

const SearchScreenContent = ({navigation}) => {
  return (
    <View style={styles.container}>      
    </View>
  );
};

const SearchScreen = () => {
  return (
    <Drawer.Navigator screenOptions={{ drawerPosition: 'left' }}>
      <Drawer.Screen name="Recherche" component={SearchScreenContent}/>
    </Drawer.Navigator>
  );
};


export default SearchScreen;
