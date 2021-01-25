import React from "react";
import {View, Text, ImageBackground, Pressable} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";
import { FlatList,List } from "react-native-gesture-handler";
import searchResults from "../../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";




const ProfileScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground 
            source = {require('../../../assets/images/fond_vert_orange.jpeg')} 
            style = {styles.image}>
                <Pressable > 
                    <Text>Modifier mes informations</Text>
                </Pressable>

                 <Text style = {styles.attributs}>Nom : Michèle</Text>


                
                <Text style = {styles.attributs}>Prénom :</Text>
                <Text style = {styles.attributs}>Adresse :</Text>
                <Text style = {styles.attributs}>Mail :</Text>
                <Text style = {styles.attributs}>Téléphone :</Text>


            </ImageBackground>
            
        </View>
    );
};

export default ProfileScreen;