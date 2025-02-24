import { View, StyleSheet, Text, Pressable, Image } from "react-native";

export default function CocktailCardSmall({navigation, drink}) {
    return (
        <Pressable style={styles.wrapper} onPress={() => navigation.navigate("Details", {drinkId: drink.idDrink})}>
            <Image source={{uri: drink.strDrinkThumb}} style={{width: 92, height: 92, borderRadius: 4 }} />
            <View style={styles.details}>
                <Text style={styles.title}>{drink.strDrink}</Text>
                <Text style={styles.category}>{drink.strCategory}</Text>
                <Text style={styles.category}>{drink.strAlcoholic}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        overflow: 'hidden',
        flexDirection: 'row',
        gap: 16,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 8,
        padding: 4,
        alignContent: 'center',
        alignItems: 'center',
    },

    frame: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: ''
    },

    title: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },

    category: {
        fontSize: 18,
        color: 'gray',
    },
});