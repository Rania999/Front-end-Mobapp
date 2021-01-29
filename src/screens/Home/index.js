import React from "react";
import {View, Text, ImageBackground, Pressable} from "react-native";
import styles from "./styles-homescreen";
import {useNavigation} from "@react-navigation/native";
import { FlatList,List } from "react-native-gesture-handler";
import searchResults from "../../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";
import feedShops from "../../../assets/data/feedShops";
import Post from "../../components/PostShops";


const HomeScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground 
            source = {require('../../../assets/images/CarteCarotte.png')} 
            style = {styles.image}>
                <Pressable style = {styles.searchButton}
            onPress = {() => navigation.navigate('Destination Search')}>
                
                <Text style = {styles.buttonTextSearch}> Où êtes-vous ?</Text> 
                </Pressable>
                <Pressable style = {styles.button1}
                onPress = {() => navigation.navigate('Login')}>
                    <Text style = {styles.buttonText}> Se déconnecter</Text>
                </Pressable>

                <Text style = {styles.title}> Nos magasins </Text>
                <Text style = {styles.title1}> Nos selections </Text>




                <Pressable style = {styles.button}
                onPress = {() => navigation.navigate('Shops')}>
                    <Text style = {styles.buttonText}> Tous les découvrir</Text>
                </Pressable>
                
                <FlatList
                style={styles.list}

                data = {feedShops}
                renderItem = {(item) => ( 
                    
               <Post post = {item} /> 
                            
                 
                
                 )}
                
                 horizontal = {true}/>
            </ImageBackground>
            
        </View>
    );
};

export default HomeScreen;
