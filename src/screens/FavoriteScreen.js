import React from "react";
import { View, ScrollView } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import styles from "../theme/styles";
import EmptyPage from "../components/emptyPage";
import CocktailCard from "../components/cocktailCard";

const FavoriteScreen = ({ navigation }) => {
  const favorites = useSelector((state) => state.favorites.list)

  return (
    favorites.length > 0 ?
    <ScrollView alwaysBounceVertical={true} style={styles.container}>
        <View style={{gap: 20}}>
          {
            favorites.map((item) => {
              return <CocktailCard key={item.idDrink} navigation={navigation} drink={item}/> 
  
          })
          }
        </View>
    </ScrollView>
    :
    <EmptyPage navigation={navigation} icon={'heart'} theme={"rgb(255, 53, 53)"}/>
  );
};

export default FavoriteScreen;
