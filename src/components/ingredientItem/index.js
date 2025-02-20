import { useCallback, useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, incrementQuantity, removeFromCart, cartList, decrementQuantity } from "../../features/cart";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function IngredientItem({ ingredient, measure }) {
    const dispatch = useDispatch()
    const cart = useSelector(cartList)
    const [isInCart, setIsInCart] = useState(null)

    const findInCart = useCallback(() => {
        const found = cart.find((item) => item.ingredient === ingredient)
        setIsInCart(found)
    }, [cart])

    useEffect(() => {
        console.log('This is the cart', cart)
        findInCart()
    }, [cart])

    return (
        <View style={styles.ingredientItem}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <Image source={{uri: `https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(ingredient)}.png`}} style={{width: 40, height: 40 }} />
                <Text style={styles.ingredientText}>{ingredient} {!!measure ? `- ${measure}` : ''}</Text>
            </View>
            {
                !!isInCart ?
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                    <Pressable style={styles.removeFromCartBtn} onPress={() => dispatch(isInCart.quantity < 2 ?  removeFromCart(ingredient) : decrementQuantity(ingredient))}>
                        <Ionicons name={'remove-outline'} size={12} color={"rgb(255, 53, 53)"} />
                    </Pressable>
                    <Text>{isInCart.quantity}</Text>
                    <Pressable style={styles.addToCartBtn} onPress={() => dispatch(incrementQuantity(ingredient))}>
                        <Ionicons name={'add-outline'} size={12} color={"rgb(0, 110, 255)"} />
                    </Pressable>
                </View> :
                <Pressable style={styles.addToCartBtn} onPress={() => dispatch(addToCart(ingredient))}>
                    <Ionicons name={'cart-outline'} size={24} color={"rgb(0, 110, 255)"} />
                </Pressable>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    ingredientItem: {
        backgroundColor: '#FFFFFF',
        padding: 8,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    ingredientText: {
        fontSize: 16,
    },

    addToCartBtn: {
        backgroundColor: 'rgba(0, 110, 255, 0.1)',
        padding: 10,  
        borderRadius: 50,
    },

    removeFromCartBtn: {
        backgroundColor: 'rgba(255, 53, 53, 0.1)',
        padding: 10,  
        borderRadius: 50,
    }
})