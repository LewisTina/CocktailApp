import React from "react";
import { Text, View } from "react-native";
import styles from "../theme/styles";
import EmptyPage from "../components/emptyPage";

const CartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>      
      <EmptyPage navigation={navigation} icon={'cart'} theme={"rgb(0, 110, 255)"}/>
    </View>
  );
};

export default CartScreen;
