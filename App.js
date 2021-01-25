import React, {useState} from 'react';
import {FlatList,TextInput, Button, View, Text, SafeAreaView, StatusBar, Image} from 'react-native';
import {encode} from 'base-64';


import HomeScreen from './src/screens/Home';
import Post from './src/components/PostShops';
import feedShops from './assets/data/feedShops';
import feedProducts from './assets/data/feedProducts';
import ShopsInfoScreen from './src/screens/Shops';
import SearchScreen from "./src/screens/DestinationSearch";
import ProductsInShopScreen from "./src/screens/ProductsInShop"; 
import LoginScreen from "./src/screens/Login";
import "react-native-gesture-handler";
import Router from "./src/navigation/Router";



//const post1 = feed[0];

const KivAppA = () => {
  return (
    <>
    <StatusBar barStyle = "dark-content"/>
      <Router />
    
    </>
  )
};
export default KivAppA;