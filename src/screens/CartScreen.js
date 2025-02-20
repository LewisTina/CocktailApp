import React from "react";
import { View, ScrollView } from "react-native";
import { useSelector } from 'react-redux';
import styles from "../theme/styles";
import EmptyPage from "../components/emptyPage";
import IngredientItem from "../components/ingredientItem";

const CartScreen = ({navigation}) => {
  const cart = useSelector((state) => state.cart.list)

  return (
    cart.length > 0 ?
    <ScrollView alwaysBounceVertical={true} style={styles.container}>
        <View style={{gap: 20}}>
          {
            cart.map((item) => {
              return <IngredientItem key={`cart-${item.ingredient}`} ingredient={item.ingredient}/> 
            })
          }
        </View>
    </ScrollView>
    :
    <EmptyPage navigation={navigation} icon={'cart'} theme={"rgb(0, 110, 255)"}/>
  );
};

export default CartScreen;
