import React, { useState } from "react";
import {View, Text, Image, Pressable} from "react-native";
import styles from "./styles.js";
import feedProduct from "../../../assets/data/feedProducts";
import {useNavigation} from "@react-navigation/native";


const Post = (props) => {

    const post = props.post.item;
    const [numberOfUnits, SetNumberOfUnits] = useState(0);
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
        <View style = {styles.row}>
            <Image 
            source = {{uri : post.Picture_link}}
            style = {styles.image}/>

            <View style = {styles.generalInfo}>
                <Text style = {styles.nameProduct}> {post.Nom} </Text>
                <Text style = {styles.price}> Prix: {post.Px_unite} euros </Text>
                <Text style = {styles.description}> Le petit + : {post.Histoire} {post.Categorie} {post.Composition} {post.Valeurs} </Text>
                <Text style = {styles.description}> {post.Type_vente} </Text>
            

            <View style = {styles.buttonContainer}>
                <Pressable style = {styles.button}
                onPress = {() => {SetNumberOfUnits(Math.max(numberOfUnits - 1, 0))}}>
                    <Text > - </Text>
                </Pressable>
                <Text style = {styles.buttonText}>
                    {numberOfUnits}
                </Text>
                <Pressable style = {styles.button}
                onPress = {() => {SetNumberOfUnits(numberOfUnits + 1)}}>
                    <Text> + </Text>
                </Pressable>
                </View>
            </View>

        </View>
        <View style = {styles.generalInfo}>
                    <Pressable style = {styles.buttonPanier}
                    onPress = {() => {navigation.navigate('Home')}}>
                        <Text style = {styles.text}> Ajouter au panier</Text>
                    </Pressable>
                    <Pressable style = {styles.buttonPanier}
                    onPress = {() => {navigation.navigate('Home')}}>
                        <Text style = {styles.text}> Ajouter aux favoris</Text>
                    </Pressable>
                </View>
        </View>
    );

};

export default Post;