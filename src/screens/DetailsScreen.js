import React from "react";
import { Text, View } from "react-native";
import styles from "../theme/styles";

const DetailsScreen = ({ navigation, route }) => {
  const { drinkId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the details screen</Text>
      <Text>itemId: {JSON.stringify(drinkId)}</Text>
      </View>
  );
};

export default DetailsScreen;
