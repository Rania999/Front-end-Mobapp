import React from "react";
import {View, Text, ImageBackground, Pressable} from "react-native";
import styles from "./styles";



const HomeScreen = (props) => {

    return (
        <View>
            <Pressable style = {styles.searchButton}>
                
                    <Text style = {styles.buttonText}> Que cherchez-vous ?</Text>
                </Pressable>
            <ImageBackground 
            source = {require('../../../assets/images/fond_vert_orange.jpeg')} 
            style = {styles.image}>

                <Text style = {styles.title}> Magasins </Text>
                <Pressable style = {styles.button}>
                    <Text style = {styles.buttonText}> Tous les découvrir</Text>
                </Pressable>

            </ImageBackground>
            
        </View>
    );
};

export default HomeScreen;