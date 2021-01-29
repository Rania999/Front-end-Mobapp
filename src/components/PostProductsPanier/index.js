import React, { useState } from "react";
import {View, Text, Image, Pressable} from "react-native";
import styles from "./styles.js";
import feedProduct from "../../../assets/data/feedProducts";
import {useNavigation} from "@react-navigation/native";



const Post = (props) => {

    const post = props.post.item;

    const navigation = useNavigation();
    return (

        <View style = {styles.container}>

            
            
        <View style = {styles.row}>
        <Image 
            source = {{uri : post.Picture_link}}
            style = {styles.image}/>

            <View style = {styles.generalInfo}>
                <Text style = {styles.nameProduct}> {post.Nom} </Text>
                <Text style = {styles.price}> Prix: {post.Prix_produits} euros </Text>
                <Text style = {styles.quantity}> {post.Qt} {post.Unite} </Text>
                <Text style = {styles.totalPrice}> {post.Total} euros </Text>

            </View>

        </View>
        <View style = {styles.generalInfo}>

                    <Pressable style = {styles.buttonPanier}>
                        <Text> Ajouter aux favoris</Text>
                    </Pressable>
                    <Pressable style = {styles.buttonPanier}>
                        <Text> Retirer du panier</Text>
                    </Pressable>
                </View>
        </View>

    );

};

export default Post;