import React from "react";
import {View, Text, ImageBackground, Pressable} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";
import { FlatList,List } from "react-native-gesture-handler";
import searchResults from "../../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";




const HomeScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground 
            source = {require('../../../assets/images/fond_vert_orange.jpeg')} 
            style = {styles.image}>
                <Pressable style = {styles.searchButton}
            onPress = {() => navigation.navigate('Destination Search')}>
                
                    <Text style = {styles.buttonTextSearch}> Où êtes-vous ?</Text>
                </Pressable>
                <Pressable style = {styles.button}
                onPress = {() => navigation.navigate('Login')}>
                    <Text style = {styles.buttonText}> Se déconnecter</Text>
                </Pressable>

                <Text style = {styles.title}> Nos magasins </Text>



                <Pressable style = {styles.button}
                onPress = {() => navigation.navigate('Shops')}>
                    <Text style = {styles.buttonText}> Tous les découvrir</Text>
                </Pressable>

            </ImageBackground>
            
        </View>
    );
};

export default HomeScreen;