import React,{ useEffect, useState } from "react";
import { Text, View, Button, ActivityIndicator, ScrollView } from "react-native";
import styles from "../theme/styles";
import CocktailCard from "../components/cocktailCard";
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  const retrieveDrinkRandomly = async () => {
    try {
      const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      const response = await axios.get(API_URL);
      const data = response.data
      return data.drinks[0];
    } catch (e) {
      console.log("Erreur lors de l'appel à l'API : " + e);
      return null
    }
  }

  useEffect(() => {
    const retrieveDrinks = async () => {
      let drinks = [];
      for (let i = 0; i < 10; i++) {
      const drink = await retrieveDrinkRandomly();
      if (drink) {
        drinks.push(drink);
      }
      }
      setDrinks(drinks);
      setIsLading(false);
    };

    retrieveDrinks();
  }, []);

  return (

    <ScrollView alwaysBounceVertical={true} style={styles.container}>
      {
        isLoading ?
        <ActivityIndicator size="small" color="grey" style={{margin: "auto"}}/>
        :
        <View style={{gap: 20}}>
          {
            drinks.map((item) => {
              return <CocktailCard key={item.idDrink} navigation={navigation} drink={item}/> 
  
          })
          }
        </View>
      }
    </ScrollView>
  );
};

export default HomeScreen;
