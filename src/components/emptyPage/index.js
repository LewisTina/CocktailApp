import { View, StyleSheet, ImageBackground, Text, Pressable, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function EmptyPage({navigation, theme, icon}) {
    return (
        <View style={styles.wrapper}>
            <Ionicons name={icon} size={64} color={theme} />
            <Text style={{fontSize: 16, maxWidth: '70%', textAlign: 'center'}}>Vous n'avez cocktail en favoris pour le moment</Text>
            <Pressable style={[styles.action, {backgroundColor: theme}]} onPress={() => navigation.navigate("Accueil")}>
                <Text style={{color: "white", fontSize: 16}}>Voir les cocktails</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        margin: "auto",
        padding: 16,
        gap: 20,
        alignItems: "center",
    },

    action: {
        color: "white",
        paddingVertical: 16,
        paddingHorizontal: 32,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },
})