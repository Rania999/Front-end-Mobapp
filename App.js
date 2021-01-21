import React, {useState} from 'react';
import {FlatList,TextInput, Button, View, Text, SafeAreaView, StatusBar} from 'react-native';
import {encode} from 'base-64';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';

const post1 = feed[0];

const KivAppA = () => {
  return (
    <>
    <StatusBar barStyle = "dark-content"/>
    <SafeAreaView>

      <Post post = {post1}/>
      <Post post = {feed[1]} />
      
    </SafeAreaView>

    </>
  )
};
export default KivAppA;