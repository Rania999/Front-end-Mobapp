import React, {useState} from 'react';
import {FlatList,TextInput, Button, View, Text, SafeAreaView, StatusBar} from 'react-native';
import {encode} from 'base-64';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feedShops';
import ShopsInfoScreen from './src/screens/Shops';
import SearchScreen from "./src/screens/DestinationSearch"



const post1 = feed[0];

const KivAppA = () => {
  return (
    <>
    <StatusBar barStyle = "dark-content"/>
    <SafeAreaView>


      <SearchScreen />
      
    </SafeAreaView>

    </>
  )
};
export default KivAppA;