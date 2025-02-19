import { useState, useEffect } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import axios from 'axios';
import CocktailDetail from "../components/cocktailDetail";

const DetailsScreen = ({ route }) => {
  const [isLoading, setIsLading] = useState(true);
  const { drinkId } = route.params;
  const [drink, setDrink] = useState(null);

  const retrieveDrinkById = async () => {
    try {
      const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
      const response = await axios.get(API_URL);
      const data = response.data
      setDrink(data.drinks[0]);
    } catch (e) {
      console.log("Erreur lors de l'appel à l'API : " + e);
      return null
    } finally {
      setIsLading(false);
    }
  }

  useEffect(() => {
    if(!!drinkId) retrieveDrinkById();
  }, [drinkId]);

  return (
    <ScrollView alwaysBounceVertical={true}>
      {
        isLoading ?
        <ActivityIndicator size="small" color="grey" style={{margin: "auto"}}/>
        :
        <CocktailDetail cocktail={drink}/>
      }
    </ScrollView>
  );
};

export default DetailsScreen;
