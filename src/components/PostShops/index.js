import React from "react";
import {View, Text, Image,ImageBackground} from "react-native";
import styles from "./styles.js";


const Post = (props) => {

    const post = props.post.item;

    console.log(post.image);

    return (
        <View style = {styles.container}>
            <Image 
            source = {{uri : post.image}}
            style = {styles.image}/>
            
            
            
            <Text style = {styles.businessName}> {post.businessName} </Text>
            <Text style = {styles.businessType}> {post.businessType} </Text>
            <Text style = {styles.pdv}> Point de vente : {post.pdv} </Text>
            <Text style = {styles.address}> {post.address}</Text>
            <Text style = {styles.addressDetail}> {post.addressDetail} </Text>


        </View>
    );

};

export default Post;

