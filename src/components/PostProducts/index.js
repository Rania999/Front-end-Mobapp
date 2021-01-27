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
            source = {{uri : post.image}}
            style = {styles.image}/>

            <View style = {styles.generalInfo}>
                <Text style = {styles.nameProduct}> {post.name} </Text>
                <Text style = {styles.price}> Prix: {post.price} euros </Text>
                <Text style = {styles.description}> Le petit + : {post.description} </Text>
            

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
                        <Text> Ajouter au panier</Text>
                    </Pressable>
                    <Pressable style = {styles.buttonPanier}
                    onPress = {() => {navigation.navigate('Home')}}>
                        <Text> Ajouter aux favoris</Text>
                    </Pressable>
                </View>
        </View>
    );

};

export default Post;