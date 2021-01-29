import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import ShopsScreen from "../screens/Shops";
import ProductsInShop from "../screens/ProductsInShop";
import DestinationSearchScreen from "../screens/DestinationSearch";
import FavorisScreen from "../screens/Favoris";
import InfosScreen from "../screens/Infos";
import ExploreNavigator from "../navigation/ExploreNavigator";

import { Component } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator tabBarOptions = {{ 
            activeTintColor : "orange"

        }}> 
            <Tab.Screen name = {"Accueil"}
        component = {HomeScreen}
        options = {{
            tabBarIcon : ({color}) => (
                <Fontisto name = "home" size = {25} color = {color} />
            )
        }} />
        <Tab.Screen name = {"Parcourir"}
        component = {DestinationSearchScreen}
        options = {{
            tabBarIcon : ({color}) => (
                <FontAwesome name = "search" size = {25} color = {color} />
            )
        }} />
        <Tab.Screen name = {"Favoris"}
        component = {FavorisScreen}
        options = {{
            tabBarIcon : ({color}) => (
                <FontAwesome5Icon  name = "heart" size = {25} color = {color} />
            )
        }} />
        <Tab.Screen name = {"+"}
        component = {InfosScreen}
        options = {{
            tabBarIcon : ({color}) => (
                <EvilIcons name = "user" size = {25} color = {color} />
            )
        }} />

        </Tab.Navigator>

    );
}

export default HomeTabNavigator;