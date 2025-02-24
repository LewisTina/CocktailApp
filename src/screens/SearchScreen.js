import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, View, ScrollView, TextInput, Pressable, Text, ActivityIndicator, Keyboard } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from 'axios';
import CocktailCardSmall from "../components/cocktailCardSmall";

const Drawer = createDrawerNavigator();

const SearchScreenContent = ({navigation}) => {
  const [ keyWord, setKeyWord ] = useState('');
  const [ prefetch, setPrefetch ] = useState('');
  const [ cocktails, setCocktails ] = useState('');
  const [ isLoading, setIsLading ] = useState(true);

  const prefetchItems = async (scope) => {
    try {
      const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?${scope}=list`
      const response = await axios.get(API_URL);
      const data = response.data;
      return data.drinks;
    } catch (e) {
      console.log("Erreur lors de l'appel à l'API : " + e);
    }
  }

  useEffect(() => {
    const retrieveItems = async () => {
      const categories = await prefetchItems('c');
      const ingredients = await prefetchItems('i');
      const glass = await prefetchItems('g');
      const alcohol = await prefetchItems('a');
      setPrefetch({categories, ingredients, glass, alcohol});
      setIsLading(false);
    };

    retrieveItems();
  }, []);

  const items = useMemo(() => {
    let val = [];
    if (prefetch.categories) {
      prefetch.categories.map((item) => {
        val.push({type:'filter', scope: 'c', value: item.strCategory});
      });
    }
    if (prefetch.ingredients) {
      prefetch.ingredients.map((item) => {
        val.push({type:'filter', scope: 'i', value: item.strIngredient1});
      });
    }
    if (prefetch.glass) {
      prefetch.glass.map((item) => {
        val.push({type:'filter', scope: 'g', value: item.strGlass});
      });
    }
    if (prefetch.alcohol) {
      prefetch.alcohol.map((item) => {
        val.push({type:'filter', scope: 'a', value: item.strAlcoholic});
      });
    }
    return val.sort((a, b) => a.value.localeCompare(b.value));
  }, [prefetch]);


  const handleSearch = async (keyword) => {
    try {
      const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword.toLowerCase()}`
      const response = await axios.get(API_URL);
      const data = response.data;
      setCocktails(typeof(data.drinks) != 'string' ? data.drinks : []);
    } catch (e) {
      console.log("Erreur lors de l'appel à l'API : " + e);
    }
  };

  useEffect(() => {
    handleSearch(keyWord)
  }, [keyWord]);

  const filteredItems = useMemo(() => {
    if(!!keyWord) {
      let allResults = []
      const drinks = cocktails;
      if (!!drinks) {
        drinks.map((item) => {
          allResults.push({type:'search', scope: 's', value: item.strDrink, data: item});
        });
      }
      const filters = items.filter((item) => item.value.toLowerCase().includes(keyWord.toLowerCase()));
      return [...allResults, ...filters];
    }
    return [];
  }, [items, keyWord, cocktails]);

  const scopes = {
    c: 'Catégories',
    i: 'Ingrédients',
    g: 'Verres',
    a: 'Alcool',
    s: 'Recherche'
  }

  return (
    <ScrollView alwaysBounceVertical={true} contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Rechercher un ingredient, catégorie, verre..."
          placeholderTextColor={'rgb(137, 137, 137)'}
          value={keyWord}
          onChangeText={setKeyWord}
        />
        <Pressable style={styles.searchButton} onPress={() => Keyboard.dismiss()}>
          <Text>
            <Ionicons name={"search"} size={18} color={"white"} />
          </Text>
        </Pressable>
      </View> 
      <View style={{gap: 4, paddingBottom: '128'}}>

        <View style={styles.itemsList}>
          {
            filteredItems.map((item, index) => {
              return (
                item.type == 'search' ?
                <CocktailCardSmall key={index} drink={item.data} navigation={navigation}/>
                :
                <Pressable key={index} style={styles.item} onPress={() => navigation.navigate('search-result', { value: item.value, scope: item.scope })}>
                  <Text style={{fontSize: 16, fontWeight: '600'}}>
                    <Text style={{fontSize: 16, color: 'grey'}}>Filter par {scopes[item.scope]}: </Text>
                    {item.value}
                  </Text>
                </Pressable>
              );
            })
          }
        </View>
      </View>   
    </ScrollView>
  );
};

const SearchBy = ({navigation, route}) => {
  const [ items, setItems ] = useState('');
  const [ isLoading, setIsLading ] = useState(true);
  const { scope } = route.params;

  const retrieveItems = async () => {
    try {
      const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?${scope}=list`
      const response = await axios.get(API_URL);
      const data = response.data;
      setItems(data.drinks);
    } catch (e) {
      console.log("Erreur lors de l'appel à l'API : " + e);
    }
  };

  useEffect(() => {
    retrieveItems();
    setIsLading(false);
  }, []);

  return (
    <ScrollView alwaysBounceVertical={true} contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
      {
        (isLoading || !items) ?
        <ActivityIndicator size="small" color="grey" style={{margin: "auto"}}/>
        :
        <View style={styles.itemsList}>
          {
            items.map((item, index) => {
              return (
                <Pressable key={index} style={styles.item} onPress={() => navigation.navigate('search-result', { value: item[scope == 'c' ? 'strCategory' : 'strIngredient1'], scope })}>
                  <Text style={{fontSize: 16}}>{item[scope == 'c' ? 'strCategory' : 'strIngredient1']}</Text>
                </Pressable>
              );
            })
          }
        </View>
      }
    </ScrollView>
  );
}

const SearchScreen = () => {
  return (
    <Drawer.Navigator screenOptions={{ drawerPosition: 'left' }}>
      <Drawer.Screen name="Recherche" component={SearchScreenContent}/>
      <Drawer.Screen initialParams={{ scope: 'c' }} name="Cocktails par catégorie" component={SearchBy}/>
      <Drawer.Screen initialParams={{ scope: 'i' }} name="Cocktails par ingredients" component={SearchBy}/>
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  content : {
    padding: 16,
    gap: 24,
  },

  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    borderBottomColor: 'rgba(182, 182, 182, 0.3)',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    padding: 4,
  },

  input: {
    flex: 1,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'black',
    borderRadius: 8,
    borderRadius: 40,
  },

  searchButton: {
    padding: 12,
    backgroundColor: 'rgb(0, 110, 255)',
    borderRadius: 40,
    fontSize: 16,
  },

  itemsList: {
    flexDirection: 'column',
    gap: 16,
    justifyContent: 'flex-start',
    padding: 16,
  },

  item: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 6,
  }
});


export default SearchScreen;
