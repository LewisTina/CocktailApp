import React, { useState, useEffect } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import CocktailCard from "../components/cocktailCard";
import axios from 'axios';

const SearchResultScreen = ({ navigation, route }) => {
    const [ items, setItems ] = useState('');
    const [ isLoading, setIsLading ] = useState(true);
    const { scope, value } = route.params;
    console.log(route.params)

    const retrieveItems = async () => {
        try {
        const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${scope}=${value}`;
        const response = await axios.get(API_URL);
        const data = response.data;
        console.log(data)
        setItems(data.drinks);
        } catch (e) {
          console.log("Erreur lors de l'appel à l'API : " + e);
        }
    };

    useEffect(() => {
        retrieveItems();
        setIsLading(false);
    }, []);

    console.log(items)

  return (
    <ScrollView alwaysBounceVertical={true} contentContainerStyle={{flexGrow: 1}} >
        {
            (isLoading || !items) ?
            <ActivityIndicator size="small" color="grey" style={{margin: "auto"}}/>
            :
            <View style={{gap: 4, paddingBottom: '128'}}>
            {
                items?.map((item) => {
                return <CocktailCard key={item.idDrink} navigation={navigation} drink={item}/> 

            })
            }
            </View>
      }
    </ScrollView>
  );
};

export default SearchResultScreen;
