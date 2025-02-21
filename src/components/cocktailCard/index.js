import { View, StyleSheet, ImageBackground, Text, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import FavoriteToggle from "../favoriteToggle";

export default function CocktailCard({navigation, drink}) {
    return (
    <ImageBackground source={{uri: drink.strDrinkThumb}} style={styles.wrapper}>
      <LinearGradient
        colors={['transparent', '#000000']}
        style={styles.frame}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <FavoriteToggle drink={drink} key={drink.idDrink}/>
        </View>
        <View style={styles.details}>
            <Text style={styles.category}>{drink.strCategory} • {drink.strAlcoholic}</Text>
            <Text style={styles.title}>{drink.strDrink}</Text>
            <Pressable style={styles.seeMoreBtn} onPress={() => navigation.navigate("Details", {drinkId: drink.idDrink})}>
                <Text style={styles.text}>{"Voir les détails"}</Text>
            </Pressable>
        </View>
      </LinearGradient>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      aspectRatio: 0.9,
      overflow: 'hidden',
    },

    frame: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: ''
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

    seeMoreBtn : {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: { fontSize: 18, color: 'white', fontWeight: 'bold' },

    icon: { position: 'absolute', right: 6, backgroundColor: 'rgba(255, 255, 255, 0.25)', padding: 8, borderRadius: 50 },
});