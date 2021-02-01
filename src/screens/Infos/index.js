import React from "react";
import {View, Text, ImageBackground, Pressable} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";



const InfosScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View style = {styles.container}>
           <ImageBackground 
            source = {require('../../../assets/images/cons.png')} 
            style = {styles.image}>
           
           
            <Text style = {styles.title}>Information Personnelles</Text>

            <Pressable 
            style = {styles.button1}
            onPress = {() => {navigation.navigate('Profile')}}
            >
                <Text style = {styles.buttonText}> Mon profil</Text>
            </Pressable>

            <Pressable 
            style = {styles.button2}
            >
                <Text style = {styles.buttonText}> Mode de paiement</Text>
            </Pressable>

            <Pressable 
            style = {styles.button3}
            onPress = {() => {navigation.navigate('Panier')}}
            >
                <Text style = {styles.buttonText}> Mon panier</Text>
            </Pressable>

            <Pressable 
            style = {styles.button4}
            onPress = {() => {navigation.navigate('Commandes')}}
            >
                <Text style = {styles.buttonText}> Mes commandes</Text>
            </Pressable>

            <Pressable 
            style = {styles.button5}
            >
                <Text style = {styles.buttonText}> Mentions légales</Text>
            </Pressable>
            </ImageBackground>
        </View>
    );
};

export default InfosScreen;