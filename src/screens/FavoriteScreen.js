import React from "react";
import { Text, View } from "react-native";
import styles from "../theme/styles";
import EmptyPage from "../components/emptyPage";

const FavoriteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <EmptyPage navigation={navigation} icon={'heart'} theme={"rgb(255, 53, 53)"}/>
    </View>
  );
};

export default FavoriteScreen;
