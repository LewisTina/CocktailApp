import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from "react";
import IngredientItem from "../ingredientItem";
import FavoriteToggle from "../favoriteToggle";

export default function CocktailDetail({cocktail}) {
    let i = 1;
    const ingredients = useMemo(() => {
        const ingredients = [];
        while(cocktail[`strIngredient${i}`] !== null) {
            ingredients.push(<IngredientItem key={i} ingredient={cocktail[`strIngredient${i}`]} measure={cocktail[`strMeasure${i}`]}/>);
            i++;
        }
        return ingredients;
    }, [cocktail]);

    return (
        <View style={{paddingBottom: '128'}}>
            <ImageBackground source={{uri: cocktail.strDrinkThumb}} style={styles.coverWrapper}>
                <LinearGradient colors={['transparent', '#000000']}
                style={styles.frame}>
                <View style={styles.details}>
                    <View style={{width: "80%"}}>
                        <Text style={styles.category}>{cocktail.strCategory} • {cocktail.strAlcoholic}</Text>
                        <Text style={styles.title}>{cocktail.strDrink}</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <FavoriteToggle drink={cocktail}/>
                    </View>
                </View>
                </LinearGradient>
            </ImageBackground>

            <View style={{gap: 32}}>
                <View style={{backgroundColor: 'rgba(0, 0, 0, 1)', padding: 20}}>
                    <Text style={{color: 'white', fontSize: 16}}>{cocktail.strInstructions}</Text>
                </View>

                <View style={{paddingHorizontal: 20, gap: 12}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 8}}>Ingredients</Text>
                        {ingredients}
                </View>
            </View>
        </View>
    )

}

export const styles = StyleSheet.create({
    coverWrapper: {
      width: '100%',
      aspectRatio: 0.8,
    },

    frame: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
        backgroundColor: ''
    },

    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },

    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
    },

    category: {
        fontSize: 18,
        color: 'gray',
    },

    favoriteButton : {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: 1,
        padding: 10,  
        borderRadius: 50,
    },
});