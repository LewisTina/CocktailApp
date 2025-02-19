import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import axios from 'axios';
import styles from "../theme/styles";

const FakeDrink = 
{
  "idDrink": "13066",
  "strDrink": "Bruce's Puce",
  "strDrinkAlternate": null,
  "strTags": null,
  "strVideo": null,
  "strCategory": "Shot",
  "strIBA": null,
  "strAlcoholic": "Alcoholic",
  "strGlass": "Shot glass",
  "strInstructions": "In a regular-sized shot glass, layer, with a spoon or cherry, the grenadine , the Kahlua , then the Bailey's Irish cream in equal portions. It goes down really smooth ,and you don't even need a chaser. It tastes just like chocolate milk.(Really!)",
  "strInstructionsES": null,
  "strInstructionsDE": "In einem normal großen Schnapsglas, in einer Schicht, mit einem Löffel oder einer Kirsche, die Grenadine, der Kahlua, dann die Bailey's Irish Cream zu gleichen Portionen einfüllen. Es geht wirklich reibungslos ab und man braucht nicht einmal einen Chaser. Es schmeckt wie Schokoladenmilch. (Wirklich!)",
  "strInstructionsFR": null,
  "strInstructionsIT": "In un bicchierino di dimensioni regolari, sovrapporre, con un cucchiaio o una ciliegia, la granatina, il Kahlua, quindi la crema irlandese Bailey's in porzioni uguali.\r\nVa davvero bene.\r\nHa il sapore del latte al cioccolato.\r\n(Veramente!)",
  "strInstructionsZH-HANS": null,
  "strInstructionsZH-HANT": null,
  "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/svsvqv1473344558.jpg",
  "strIngredient1": "Grenadine",
  "strIngredient2": "Kahlua",
  "strIngredient3": "Baileys irish cream",
  "strIngredient4": null,
  "strIngredient5": null,
  "strIngredient6": null,
  "strIngredient7": null,
  "strIngredient8": null,
  "strIngredient9": null,
  "strIngredient10": null,
  "strIngredient11": null,
  "strIngredient12": null,
  "strIngredient13": null,
  "strIngredient14": null,
  "strIngredient15": null,
  "strMeasure1": null,
  "strMeasure2": null,
  "strMeasure3": null,
  "strMeasure4": null,
  "strMeasure5": null,
  "strMeasure6": null,
  "strMeasure7": null,
  "strMeasure8": null,
  "strMeasure9": null,
  "strMeasure10": null,
  "strMeasure11": null,
  "strMeasure12": null,
  "strMeasure13": null,
  "strMeasure14": null,
  "strMeasure15": null,
  "strImageSource": null,
  "strImageAttribution": null,
  "strCreativeCommonsConfirmed": "No",
  "dateModified": "2016-09-08 15:22:38"
}

const DetailsScreen = ({ navigation, route }) => {
  const [isLoading, setIsLading] = useState(true);
  const { drinkId } = route.params;
  const [drink, setDrink] = useState(FakeDrink);

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

  /* useEffect(() => {
    if(!!drinkId) retrieveDrinkById();
  }, [drinkId]); */

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the details screen</Text>
      <Text>itemId: {JSON.stringify(drinkId)}</Text>
      </View>
  );
};

export default DetailsScreen;
