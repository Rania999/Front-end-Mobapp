import React, { useState } from "react";
import {View, Text, Image, Pressable} from "react-native";
import styles from "./styles.js";
import {useNavigation} from "@react-navigation/native";

const Post = (props) => {


    const post = props.post.item;

    console.log(post.state)

    const navigation = useNavigation();
    return (
        //Prix_consigne, Total,  , Statut_preparation
        
        <View style = {styles.container}>
        <View style = {styles.row}>
            <Image 
            source = {{uri : post.image}}
            style = {styles.image}/>
            
            <View style = {styles.generalInfo}>
                <Text style = {styles.nameProduct}> {post.Nom} </Text>
                <Text style = {styles.price}> Prix: {post.Prix_produits} euros </Text>
                <Text style = {styles.numberOfUnits}>{post.Qt} {post.Unite}</Text>
                <Text style = {styles.price}>{post.Total} </Text>
                <Text style = {styles.dates}>Date de commande : {post.Date_commande} </Text>
                <Text style = {styles.dates}>Date de retrait : {post.Date_retrait} </Text>

                <Pressable 
                style = {styles.buttonPanier}
                onPress = {alert("ça marche !")}>
                    <Text style = {styles.description}> {post.Statut} </Text>
                    <Text style = {styles.description}> {post.Statut_preparation} </Text>
                </Pressable>
               


            </View>

        </View>
        <View style = {styles.generalInfo}>

                    <Pressable style = {styles.buttonPanier}>
                        <Text> Ajouter aux favoris</Text>
                    </Pressable>
                </View>
        </View>
    );

};

export default Post;