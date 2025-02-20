import { Pressable, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../features/favorites';
import { useCallback, useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function FavoriteToggle({drink}) {
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites.list)
    const [isFavorite, setIsFavorite] = useState(favorites.find((item) => item.id === drink.idDrink))
    
    useEffect(() => {
        setIsFavorite(!!(favorites.find((item) => item.idDrink === drink.idDrink)))
    }, [favorites])

    const handleFavorite = useCallback(() => {
        dispatch( isFavorite ? removeFromFavorite(drink.idDrink) : addToFavorite(drink) )
    }, [isFavorite])

    return(
        <Pressable style={styles.favoriteButton} onPress={handleFavorite}>
            <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={24} color={ isFavorite ? 'rgb(255, 53, 53)' : 'white'} />
        </Pressable>
    )
}

export const styles = StyleSheet.create({
    favoriteButton : {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        padding: 10,  
        borderRadius: 50,
    },
});