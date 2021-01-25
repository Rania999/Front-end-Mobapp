import React, {useState} from "react";
import {View, Text, Image, FlatList, TextInput, Pressable} from "react-native";
import styles from "./styles.js";
import feed from '../../../assets/data/feedShops';
import Post from '../../components/PostShops';
import searchResults from "../../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native";


const SearchScreen = (props) => {

    const navigation = useNavigation();
    const [inputText, setInputText] = useState('');

    return (
        <View style = {styles.container}>
            <TextInput 
            style = {styles.textInput}
            placeholder = "Ma ville"
            value = {inputText}
            onChangeText = {setInputText}
            />
            
            <FlatList 
            data = {searchResults}
            renderItem = { (item) => (
                <Pressable style = {styles.row}
                onPress = {() => {navigation.navigate('Products in shop')}}> 
                    <View style = {styles.iconContainer} > 
                    <Entypo name = {"location-pin"} size = {25} />  
                    <Text style = {styles.locationText}> {item.description} </Text> 
                    </View>
                </Pressable>)}
            />
        </View>
    );

};

export default SearchScreen;