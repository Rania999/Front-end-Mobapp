import React from "react";
import {View, Text, Image, Pressable} from "react-native";
import styles from "./styles.js";

const Post = (props) => {

    const post = props.post;
    return (
        <View style = {styles.row}>
            <Image 
            source = {{uri : post.image}}
            style = {styles.image}/>

            <View style = {styles.generalInfo}>
                <Text style = {styles.nameProduct}> {post.name} </Text>
                <Text style = {styles.price}> Prix: {post.price} euros </Text>
                <Text style = {styles.description}> Le petit + : {post.description} </Text>
            </View>

            <View>
                <Pressable style = {styles.button}>
                    <Text style = {styles.buttonText}> - </Text>
                </Pressable>
                <Text style = {styles.buttonText}>
                    value
                </Text>
                <Pressable style = {styles.button}>
                    <Text style = {styles.buttonText}> + </Text>
                </Pressable>
            </View>




        </View>
    );

};

export default Post;