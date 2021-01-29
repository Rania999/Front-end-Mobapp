import React, {useState} from "react";
import {View, Text, Image, FlatList, TextInput} from "react-native";
import styles from "./styles.js";
import Post from '../../components/PostProducts';
import feedProducts from "../../../assets/data/feedProducts";



const ProductsInShopScreen = (props) => {

    return (
        <View style = {styles.container}>
            
            <FlatList 
            data = {feedProducts}
            renderItem = { (item) => <Post post = {item}/> }
            />
    
        </View>

    );

};

export default ProductsInShopScreen;