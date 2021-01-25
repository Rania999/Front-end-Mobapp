import React from "react";
import {View, Text, ImageBackground, Pressable} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";



const InfosScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Voilà les infos perso</Text>

            <Pressable 
            style = {styles.button}
            onPress = {() => {navigation.navigate('Profile')}}
            >
                <Text style = {styles.buttonText}> Mon profil</Text>
            </Pressable>

            <Pressable 
            style = {styles.button}
            >
                <Text style = {styles.buttonText}> Mode de paiement</Text>
            </Pressable>

            <Pressable 
            style = {styles.button}
            onPress = {() => {navigation.navigate('Panier')}}
            >
                <Text style = {styles.buttonText}> Mon panier</Text>
            </Pressable>

            <Pressable 
            style = {styles.button}
            >
                <Text style = {styles.buttonText}> Mentions légales</Text>
            </Pressable>

        </View>
    );
};

export default InfosScreen;