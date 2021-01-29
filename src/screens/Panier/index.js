import React, {useState} from "react";
import {View, Text, Image, FlatList, TextInput, Pressable} from "react-native";
import styles from "./styles.js";
import Post from '../../components/PostProductsPanier';
import feedProducts from "../../../assets/data/feedProductsPanier";
import {useNavigation} from "@react-navigation/native";


const ProductsInShopScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View style = {styles.container}>
            <Pressable style = {styles.buttonPanier}
        onPress = {() => {navigation.navigate('Commandes')}}>
                <Text> Valider le panier</Text>
            </Pressable>
            
            <FlatList 
            data = {feedProducts}
            renderItem = { (item) => <Post post = {item}/> }
            />
        </View>
    );

};

export default ProductsInShopScreen;