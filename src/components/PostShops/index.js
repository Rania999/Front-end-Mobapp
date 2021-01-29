import React from "react";
import {View, Text, Image, Pressable} from "react-native";
import styles from "./styles-postshops.js";
import {useNavigation} from "@react-navigation/native";

const Post = (props) => {

    const post = props.post.item;
    const navigation = useNavigation();

    console.log(post.businessName);

    return (
        <View style = {styles.container}>
            <Image 
            source = {{uri : post.image}}
            style = {styles.image}/>
            
            
            <Text style = {styles.businessName}> {post.Nom_PdV} </Text>
            <Text style = {styles.businessType}> {post.Type_vente} </Text>
            <Text style = {styles.address}> {post.Adresse},{post.Code_postal}, {post.Ville} </Text>
            <Text style = {styles.addressDetail}> {post.D_adresse} </Text>
            <Text style = {styles.pdv}>{post.Tel_PdV}, {post.Email_PdV}</Text>

            <Pressable style = {styles.button} onPress = {() => {navigation.navigate('Products in shop')}}>
                <Text> Découvrir les produits </Text> 
            </Pressable>


        </View>
    );

};

export default Post;


