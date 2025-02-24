import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { screenOptions } from "../../theme/styles";
import SearchScreen from "../../screens/SearchScreen";
import SearchResultScreen from "../../screens/SearchResultScreen";
import FavoriteScreen from "../../screens/FavoriteScreen";
import CartScreen from "../../screens/CartScreen";
import DetailsScreen from "../../screens/DetailsScreen";
import HomeScreen from "../../screens/HomeScreen";
import RootTabNavigator from "../RootTabNavigator";

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="default" animated backgroundColor="#fafafa" />
            <RootStack.Navigator initialRouteName="Accueil">
                <SearchStack.Screen name="Recherche" component={SearchScreen}/>
                <SearchStack.Screen 
                  name="search-result"
                  component={SearchResultScreen}
                  options={({route}) => ({
                    headerBackButtonDisplayMode: 'minimal',
                    title: route.params.value,
                  })}/>
                <FavoriteStack.Screen name="Favoris" component={FavoriteScreen} options={screenOptions}/>
                <BasketStack.Screen name="Panier" component={CartScreen} />
                <HomeStack.Screen name="Accueil" component={RootTabNavigator} options={{ ...screenOptions, headerShown: false }}/>
                <HomeStack.Screen name="Details" component={DetailsScreen} 
                  options={{
                    headerTransparent: true,
                    headerTitleStyle: { color: 'transparent' },
                    headerTintColor: '#fff',
                    headerShadowVisible: false,
                    headerBackButtonDisplayMode: 'minimal',
                  }}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

const SearchStack = createNativeStackNavigator();
const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Recherche"
      screenOptions={screenOptions}
    >
      <SearchStack.Screen name="Recherche" component={SearchScreen}/>
      <SearchStack.Screen name="search-result" component={SearchResultScreen}/>
      <SearchStack.Screen name="Details" component={DetailsScreen} 
        options={{
          headerTransparent: true,
          headerTitleStyle: { color: 'transparent' },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerShadowVisible: false,
        }}/>
    </SearchStack.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ ...screenOptions, title: "Accueil",  }}/>
    <HomeStack.Screen name="Details" component={DetailsScreen} 
      options={{
        headerTransparent: true,
        headerTitleStyle: { color: 'transparent' },
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
        headerShadowVisible: false,
      }}/>
    </HomeStack.Navigator>
  );
};

const FavoriteStack = createNativeStackNavigator();
const FavoriteStackNavigator = () => {
  return (
    <FavoriteStack.Navigator initialRouteName="Favoris">
      <FavoriteStack.Screen name="Favoris" component={FavoriteScreen} options={screenOptions}/>
      <FavoriteStack.Screen name="Details" component={DetailsScreen} 
        options={{
          headerTransparent: true,
          headerTitleStyle: { color: 'transparent' },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerShadowVisible: false,
        }}/>
    </FavoriteStack.Navigator>
  );
};

const BasketStack = createNativeStackNavigator();
const BasketStackNavigator = () => {
  return (
    <BasketStack.Navigator
      initialRouteName="Panier"
      screenOptions={screenOptions}
    >
      <BasketStack.Screen name="Panier" component={CartScreen} />
    </BasketStack.Navigator>
  );
};

export { 
    SearchStackNavigator,
    HomeStackNavigator,
    FavoriteStackNavigator,
    BasketStackNavigator
 };

 export default RootStackNavigator;