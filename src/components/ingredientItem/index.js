import { View, StyleSheet, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function IngredientItem({ ingredient, measure }) {
    return (
        <View style={styles.ingredientItem}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image source={{uri: `https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(ingredient)}.png`}} style={{width: 40, height: 40 }} />
                <Text style={styles.ingredientText}>{ingredient} {!!measure ? `- ${measure}` : ''}</Text>
            </View>
            <Ionicons name={'cart-outline'} size={24} color={"rgb(0, 110, 255)"} />
        </View>
    )
}

const styles = StyleSheet.create({
    ingredientItem: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    ingredientText: {
        fontSize: 16,
    }
})