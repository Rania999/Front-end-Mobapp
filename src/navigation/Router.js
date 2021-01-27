import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import DestinationSearchScreen from "../screens/DestinationSearch";
import HomeScreen from "../screens/Home";
import ProductsInShopScreen from "../screens/ProductsInShop";
import ShopsInfoScreen from "../screens/Shops";
import HomeTabNavigator from "./HomeTabNavigator";
import PanierScreen from "../screens/Panier";
import InfosScreen from "../screens/Infos";
import ProfileScreen from "../screens/Profile";
import LoginScreen from "../screens/Login";

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            
            <Stack.Navigator>

             
            <Stack.Screen name = {"Login"} 
                component = {LoginScreen}
                options = {{title : "Connectez-vous !"}}/>
                
            <Stack.Screen name = {"Home"} 
                component = {HomeTabNavigator}
                options = {{headerShown : false}}/>

             

            <Stack.Screen name = {"Destination Search"} 
                component = {DestinationSearchScreen}
                options = {{title : "Cherchez votre ville"}}/>

            <Stack.Screen name = {"Shops"} 
                component = {ShopsInfoScreen}
                options = {{title : "Choisissez votre magasin !"}}/>  

            <Stack.Screen name = {"Products in shop"} 
                component = {ProductsInShopScreen}
                options = {{title : "Choisissez vos produits !"}}/>  

            
            <Stack.Screen name = {"Panier"} 
                component = {PanierScreen}
                options = {{title : "Votre panier"}}/>  

            <Stack.Screen name = {"Infos"} 
                component = {InfosScreen}
                options = {{title : "Vos informations"}}/>  

            <Stack.Screen name = {"Profile"} 
                component = {ProfileScreen}
                options = {{title : "Voilà vos informations perso"}}/>  

            
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;