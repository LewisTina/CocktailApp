import { View, StyleSheet, ImageBackground, Text, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CocktailCard({navigation, drink}) {
    return (
    <ImageBackground source={{uri: drink.strDrinkThumb}} style={styles.wrapper}>
      <LinearGradient
        colors={['transparent', '#000000']}
        style={styles.frame}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Pressable style={styles.favoriteButton}>
                <Ionicons name={'heart-outline'} size={24} color={'white'} />
            </Pressable>
        </View>
        <View style={styles.details}>
            <Text style={styles.category}>{drink.strCategory} • {drink.strAlcoholic}</Text>
            <Text style={styles.title}>{drink.strDrink}</Text>
            <Pressable style={styles.seeMoreBtn} onPress={() => navigation.navigate("Details", {drinkId: drink.idDrink})}>
                <Text style={styles.text}>{"Voir les détails"}</Text>
                <View style={styles.icon}>
                    <Ionicons name={'chevron-forward-outline'} size={24} color={'rgb(0, 110, 255)'} />
                </View>
            </Pressable>
        </View>
      </LinearGradient>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      aspectRatio: 0.8,
      borderRadius: 20,
      overflow: 'hidden',
    },

    frame: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
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

    favoriteButton : {
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1,
        padding: 10,  
        borderRadius: 50,
    },

    seeMoreBtn : {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: 16,
        borderRadius: 50,
        marginTop: 16,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: { fontSize: 18, color: 'rgb(0, 110, 255)' },

    icon: { position: 'absolute', right: 6, backgroundColor: 'rgba(255, 255, 255, 1)', padding: 8, borderRadius: 50 },
});